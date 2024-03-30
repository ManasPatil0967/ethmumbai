// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract CombinedTokenUserLogin is ERC20, ERC20Burnable, AccessControl, ERC20Permit {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    struct User {
        string name;
        address walletAddress;
        string aadharQRCode;
        bool isAuthenticated;
    }

    struct Merchant {
        string name;
        address walletAddress;
        string aadharQRCode;
        string merchantIdentifier;
    }

    mapping(address => User) public users;
    mapping(address => Merchant) public merchants;
    mapping(address => bool) public isUserAuthenticated;

    event UserRegistered(address indexed userAddress, string name, string aadharQRCode);
    event MerchantRegistered(address indexed merchantAddress, string name, string merchantIdentifier);
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

    function registerUser(string memory name, string memory aadharQRCode) public {
        require(bytes(name).length > 0, "Name is required");
        require(bytes(aadharQRCode).length > 0, "Aadhar QR Code is required");

        users[msg.sender] = User(name, msg.sender, aadharQRCode, false);
        emit UserRegistered(msg.sender, name, aadharQRCode);
    }

    function registerMerchant(string memory name, string memory aadharQRCode, string memory merchantIdentifier) public {
        require(bytes(name).length > 0, "Name is required");
        require(bytes(aadharQRCode).length > 0, "Aadhar QR Code is required");
        require(bytes(merchantIdentifier).length > 0, "Merchant Identifier is required");

        merchants[msg.sender] = Merchant(name, msg.sender, aadharQRCode, merchantIdentifier);
        emit MerchantRegistered(msg.sender, name, merchantIdentifier);
    }

    function authenticateUser() public {
        require(users[msg.sender].walletAddress != address(0), "User not registered");
        users[msg.sender].isAuthenticated = true;
        isUserAuthenticated[msg.sender] = true;
        emit UserAuthenticated(msg.sender);
    }

    function issueTokensToUser(address userAddress, uint256 amount) public {
        require(merchants[msg.sender].walletAddress != address(0), "Only merchants can issue tokens");
        require(users[userAddress].walletAddress != address(0), "User not registered");
        require(isUserAuthenticated[userAddress], "User not authenticated");

        _transfer(msg.sender, userAddress, amount);

        emit TokensIssued(userAddress, amount);
    }
}
