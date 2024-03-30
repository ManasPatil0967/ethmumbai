// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract CivicFLow is ERC20, ERC20Burnable, AccessControl, ERC20Permit {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant DEPARTMENT_ROLE = keccak256("DEPARTMENT_ROLE");
    uint256 public userCount;
    address[] public userAddresses;

    struct Scheme {
        string name;
        uint256 amount;
        uint256 validity_time;
        string identifier; // Added identifier field
    }

    struct User {
        string name;
        address walletAddress;
        string aadharQRCode;
        bool isAuthenticated;
        string[] identifiers;
    }

    struct Merchant {
        string name;
        address walletAddress;
        string verifier;
        string merchantIdentifier;
    }

    struct Department {
        string name;
        address walletAddress;
    }

    mapping(address => User) public users;
    mapping(address => Merchant) public merchants;
    mapping(address => Department) public departments;
    mapping(address => bool) public isUserAuthenticated;
    mapping(address => Scheme[]) public userSchemes; // Mapping from user address to array of Scheme structs

    event UserRegistered(address indexed userAddress, string name, string aadharQRCode);
    event MerchantRegistered(address indexed merchantAddress, string name, string merchantIdentifier);
    event DepartmentRegistered(address indexed departmentAddress, string name);
    event UserAuthenticated(address indexed userAddress);
    event TokensIssued(address indexed userAddress, uint256 amount);

    constructor(address defaultAdmin, address minter)
        ERC20("Central Bank Digital Currency", "CBDC")
        ERC20Permit("CBDC")
    {
        _mint(msg.sender, 10000 * 10 ** decimals());
        _grantRole(DEFAULT_ADMIN_ROLE, defaultAdmin);
        _grantRole(MINTER_ROLE, minter);
    }

    function mint(address to, uint256 amount) public onlyRole(MINTER_ROLE) {
        _mint(to, amount);
    }

    function burn(uint256 amount) public override {
        _burn(msg.sender, amount);
    }

    function burnFrom(address account, uint256 amount) public override {
        uint256 decreasedAllowance = allowance(account, msg.sender) - amount;

        _approve(account, msg.sender, decreasedAllowance);
        _burn(account, amount);
    }

    function registerUser(string memory name, string memory aadharQRCode, string[] memory ids) public {
        require(bytes(name).length > 0, "Name is required");
        require(bytes(aadharQRCode).length > 0, "Aadhar QR Code is required");
        require(users[msg.sender].walletAddress == address(0), "User already registered");

        User memory newUser = User({
            name: name,
            walletAddress: msg.sender,
            aadharQRCode: aadharQRCode,
            isAuthenticated: false,
            identifiers: ids
        });

        users[msg.sender] = newUser;
        userAddresses.push(msg.sender);
        userCount++;

        emit UserRegistered(msg.sender, name, aadharQRCode);
    }

    function registerMerchant(string memory name, string memory verifier, string memory merchantIdentifier) public {
        require(bytes(name).length > 0, "Name is required");
        require(bytes(verifier).length > 0, "Aadhar QR Code is required");
        require(bytes(merchantIdentifier).length > 0, "Merchant Identifier is required");

        Merchant memory newMerchant = Merchant({
            name: name,
            walletAddress: msg.sender,
            verifier: verifier,
            merchantIdentifier: merchantIdentifier
        });

        merchants[msg.sender] = newMerchant;
        emit MerchantRegistered(msg.sender, name, merchantIdentifier);
    }

    function registerDepartment(string memory name) public {
        require(bytes(name).length > 0, "Name is required");

        Department memory newDepartment = Department({
            name: name,
            walletAddress: msg.sender
        });

        departments[msg.sender] = newDepartment;

        _grantRole(DEPARTMENT_ROLE, msg.sender);
        emit DepartmentRegistered(msg.sender, name);
    }

    function authenticateUser() public {
        require(users[msg.sender].walletAddress != address(0), "User not registered");
        users[msg.sender].isAuthenticated = true;
        isUserAuthenticated[msg.sender] = true;
        emit UserAuthenticated(msg.sender);
    }

    // function deptTransfer(address userAddress, uint256 amount) public onlyRole(DEPARTMENT_ROLE) {
    //     require(departments[msg.sender].walletAddress != address(0), "Only departments can issue tokens");
    //     require(users[userAddress].walletAddress != address(0), "User not registered");
    //     require(isUserAuthenticated[userAddress], "User not authenticated");

    //     _transfer(msg.sender, userAddress, amount);

    //     emit TokensIssued(userAddress, amount);
    // }

    function contains(string[] storage array, string memory value) internal view returns (bool) {
        for (uint256 i = 0; i < array.length; i++) {
            if (keccak256(abi.encodePacked(array[i])) == keccak256(abi.encodePacked(value))) {
                return true;
            }
        }
        return false;
    }

    function makeScheme(string memory schemeName, uint256 amount, uint256 validity_time, string memory identifier) public onlyRole(DEPARTMENT_ROLE) {
        require(amount > 0, "Amount must be greater than 0");

        Scheme memory newScheme = Scheme({
            name: schemeName,
            amount: amount,
            validity_time: validity_time + block.timestamp,
            identifier: identifier
        });

        // Iterate over all user addresses to apply the scheme if the user's identifiers contain the scheme's identifier
        for (uint256 i = 0; i < userAddresses.length; i++) {
            address userAddress = userAddresses[i];
            if (isUserAuthenticated[userAddress] && contains(users[userAddress].identifiers, identifier)) {
                _transfer(msg.sender, userAddress, amount);

                userSchemes[userAddress].push(newScheme);
                emit TokensIssued(userAddress, amount);
            }
        }

    }

    function getSchemes(address userAddress) public view returns (Scheme[] memory) {
        return userSchemes[userAddress];
    }

    function payMerchant(address merchantAddress, uint256 amount) public {
        require(merchants[merchantAddress].walletAddress != address(0), "Merchant not registered");
        require(users[msg.sender].walletAddress != address(0), "User not registered");
        require(balanceOf(msg.sender) >= amount, "Insufficient balance");

        string memory merchantIdentifier = merchants[merchantAddress].merchantIdentifier;
        Scheme[] storage userSchemesArray = userSchemes[msg.sender];

        for (uint256 i = 0; i < userSchemesArray.length; i++) {
            if (keccak256(abi.encodePacked(userSchemesArray[i].identifier)) == keccak256(abi.encodePacked(merchantIdentifier))) {
                require(userSchemesArray[i].amount >= amount, "Scheme amount insufficient");
                userSchemesArray[i].amount -= amount;
                _transfer(msg.sender, merchantAddress, amount);
                return;
            }
        }

        revert("No matching scheme found");
    }

    function getSchemeAmounts() public view returns (string[] memory schemeNames, uint256[] memory schemeAmounts) {
        Scheme[] storage userSchemesArray = userSchemes[msg.sender];
        schemeNames = new string[](userSchemesArray.length);
        schemeAmounts = new uint256[](userSchemesArray.length);

        for (uint256 i = 0; i < userSchemesArray.length; i++) {
            schemeNames[i] = userSchemesArray[i].name;
            schemeAmounts[i] = userSchemesArray[i].amount;
        }
    }
}
