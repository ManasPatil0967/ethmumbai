import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

/**
 * @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *       address: "0x...",
 *       abi: [...],
 *     },
 *   },
 * } as const;
 */
const externalContracts = {
//   31337: {
//     CombinedTokenUserLogin: {
//       address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
//       abi: [
//         {
//           inputs: [
//             {
//               internalType: "address",
//               name: "defaultAdmin",
//               type: "address",
//             },
//             {
//               internalType: "address",
//               name: "minter",
//               type: "address",
//             },
//           ],
//           stateMutability: "nonpayable",
//           type: "constructor",
//         },
//         {
//           inputs: [],
//           name: "InvalidShortString",
//           type: "error",
//         },
//         {
//           inputs: [
//             {
//               internalType: "string",
//               name: "str",
//               type: "string",
//             },
//           ],
//           name: "StringTooLong",
//           type: "error",
//         },
//         {
//           anonymous: false,
//           inputs: [
//             {
//               indexed: true,
//               internalType: "address",
//               name: "owner",
//               type: "address",
//             },
//             {
//               indexed: true,
//               internalType: "address",
//               name: "spender",
//               type: "address",
//             },
//             {
//               indexed: false,
//               internalType: "uint256",
//               name: "value",
//               type: "uint256",
//             },
//           ],
//           name: "Approval",
//           type: "event",
//         },
//         {
//           anonymous: false,
//           inputs: [],
//           name: "EIP712DomainChanged",
//           type: "event",
//         },
//         {
//           anonymous: false,
//           inputs: [
//             {
//               indexed: true,
//               internalType: "address",
//               name: "merchantAddress",
//               type: "address",
//             },
//             {
//               indexed: false,
//               internalType: "string",
//               name: "name",
//               type: "string",
//             },
//             {
//               indexed: false,
//               internalType: "string",
//               name: "merchantIdentifier",
//               type: "string",
//             },
//           ],
//           name: "MerchantRegistered",
//           type: "event",
//         },
//         {
//           anonymous: false,
//           inputs: [
//             {
//               indexed: true,
//               internalType: "bytes32",
//               name: "role",
//               type: "bytes32",
//             },
//             {
//               indexed: true,
//               internalType: "bytes32",
//               name: "previousAdminRole",
//               type: "bytes32",
//             },
//             {
//               indexed: true,
//               internalType: "bytes32",
//               name: "newAdminRole",
//               type: "bytes32",
//             },
//           ],
//           name: "RoleAdminChanged",
//           type: "event",
//         },
//         {
//           anonymous: false,
//           inputs: [
//             {
//               indexed: true,
//               internalType: "bytes32",
//               name: "role",
//               type: "bytes32",
//             },
//             {
//               indexed: true,
//               internalType: "address",
//               name: "account",
//               type: "address",
//             },
//             {
//               indexed: true,
//               internalType: "address",
//               name: "sender",
//               type: "address",
//             },
//           ],
//           name: "RoleGranted",
//           type: "event",
//         },
//         {
//           anonymous: false,
//           inputs: [
//             {
//               indexed: true,
//               internalType: "bytes32",
//               name: "role",
//               type: "bytes32",
//             },
//             {
//               indexed: true,
//               internalType: "address",
//               name: "account",
//               type: "address",
//             },
//             {
//               indexed: true,
//               internalType: "address",
//               name: "sender",
//               type: "address",
//             },
//           ],
//           name: "RoleRevoked",
//           type: "event",
//         },
//         {
//           anonymous: false,
//           inputs: [
//             {
//               indexed: true,
//               internalType: "address",
//               name: "userAddress",
//               type: "address",
//             },
//             {
//               indexed: false,
//               internalType: "uint256",
//               name: "amount",
//               type: "uint256",
//             },
//           ],
//           name: "TokensIssued",
//           type: "event",
//         },
//         {
//           anonymous: false,
//           inputs: [
//             {
//               indexed: true,
//               internalType: "address",
//               name: "from",
//               type: "address",
//             },
//             {
//               indexed: true,
//               internalType: "address",
//               name: "to",
//               type: "address",
//             },
//             {
//               indexed: false,
//               internalType: "uint256",
//               name: "value",
//               type: "uint256",
//             },
//           ],
//           name: "Transfer",
//           type: "event",
//         },
//         {
//           anonymous: false,
//           inputs: [
//             {
//               indexed: true,
//               internalType: "address",
//               name: "userAddress",
//               type: "address",
//             },
//           ],
//           name: "UserAuthenticated",
//           type: "event",
//         },
//         {
//           anonymous: false,
//           inputs: [
//             {
//               indexed: true,
//               internalType: "address",
//               name: "userAddress",
//               type: "address",
//             },
//             {
//               indexed: false,
//               internalType: "string",
//               name: "name",
//               type: "string",
//             },
//             {
//               indexed: false,
//               internalType: "string",
//               name: "aadharQRCode",
//               type: "string",
//             },
//           ],
//           name: "UserRegistered",
//           type: "event",
//         },
//         {
//           inputs: [],
//           name: "DEFAULT_ADMIN_ROLE",
//           outputs: [
//             {
//               internalType: "bytes32",
//               name: "",
//               type: "bytes32",
//             },
//           ],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "DOMAIN_SEPARATOR",
//           outputs: [
//             {
//               internalType: "bytes32",
//               name: "",
//               type: "bytes32",
//             },
//           ],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "MINTER_ROLE",
//           outputs: [
//             {
//               internalType: "bytes32",
//               name: "",
//               type: "bytes32",
//             },
//           ],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [
//             {
//               internalType: "address",
//               name: "owner",
//               type: "address",
//             },
//             {
//               internalType: "address",
//               name: "spender",
//               type: "address",
//             },
//           ],
//           name: "allowance",
//           outputs: [
//             {
//               internalType: "uint256",
//               name: "",
//               type: "uint256",
//             },
//           ],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [
//             {
//               internalType: "address",
//               name: "spender",
//               type: "address",
//             },
//             {
//               internalType: "uint256",
//               name: "amount",
//               type: "uint256",
//             },
//           ],
//           name: "approve",
//           outputs: [
//             {
//               internalType: "bool",
//               name: "",
//               type: "bool",
//             },
//           ],
//           stateMutability: "nonpayable",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "authenticateUser",
//           outputs: [],
//           stateMutability: "nonpayable",
//           type: "function",
//         },
//         {
//           inputs: [
//             {
//               internalType: "address",
//               name: "account",
//               type: "address",
//             },
//           ],
//           name: "balanceOf",
//           outputs: [
//             {
//               internalType: "uint256",
//               name: "",
//               type: "uint256",
//             },
//           ],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [
//             {
//               internalType: "uint256",
//               name: "amount",
//               type: "uint256",
//             },
//           ],
//           name: "burn",
//           outputs: [],
//           stateMutability: "nonpayable",
//           type: "function",
//         },
//         {
//           inputs: [
//             {
//               internalType: "address",
//               name: "account",
//               type: "address",
//             },
//             {
//               internalType: "uint256",
//               name: "amount",
//               type: "uint256",
//             },
//           ],
//           name: "burnFrom",
//           outputs: [],
//           stateMutability: "nonpayable",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "decimals",
//           outputs: [
//             {
//               internalType: "uint8",
//               name: "",
//               type: "uint8",
//             },
//           ],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [
//             {
//               internalType: "address",
//               name: "spender",
//               type: "address",
//             },
//             {
//               internalType: "uint256",
//               name: "subtractedValue",
//               type: "uint256",
//             },
//           ],
//           name: "decreaseAllowance",
//           outputs: [
//             {
//               internalType: "bool",
//               name: "",
//               type: "bool",
//             },
//           ],
//           stateMutability: "nonpayable",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "eip712Domain",
//           outputs: [
//             {
//               internalType: "bytes1",
//               name: "fields",
//               type: "bytes1",
//             },
//             {
//               internalType: "string",
//               name: "name",
//               type: "string",
//             },
//             {
//               internalType: "string",
//               name: "version",
//               type: "string",
//             },
//             {
//               internalType: "uint256",
//               name: "chainId",
//               type: "uint256",
//             },
//             {
//               internalType: "address",
//               name: "verifyingContract",
//               type: "address",
//             },
//             {
//               internalType: "bytes32",
//               name: "salt",
//               type: "bytes32",
//             },
//             {
//               internalType: "uint256[]",
//               name: "extensions",
//               type: "uint256[]",
//             },
//           ],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [
//             {
//               internalType: "bytes32",
//               name: "role",
//               type: "bytes32",
//             },
//           ],
//           name: "getRoleAdmin",
//           outputs: [
//             {
//               internalType: "bytes32",
//               name: "",
//               type: "bytes32",
//             },
//           ],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [
//             {
//               internalType: "bytes32",
//               name: "role",
//               type: "bytes32",
//             },
//             {
//               internalType: "address",
//               name: "account",
//               type: "address",
//             },
//           ],
//           name: "grantRole",
//           outputs: [],
//           stateMutability: "nonpayable",
//           type: "function",
//         },
//         {
//           inputs: [
//             {
//               internalType: "bytes32",
//               name: "role",
//               type: "bytes32",
//             },
//             {
//               internalType: "address",
//               name: "account",
//               type: "address",
//             },
//           ],
//           name: "hasRole",
//           outputs: [
//             {
//               internalType: "bool",
//               name: "",
//               type: "bool",
//             },
//           ],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [
//             {
//               internalType: "address",
//               name: "spender",
//               type: "address",
//             },
//             {
//               internalType: "uint256",
//               name: "addedValue",
//               type: "uint256",
//             },
//           ],
//           name: "increaseAllowance",
//           outputs: [
//             {
//               internalType: "bool",
//               name: "",
//               type: "bool",
//             },
//           ],
//           stateMutability: "nonpayable",
//           type: "function",
//         },
//         {
//           inputs: [
//             {
//               internalType: "address",
//               name: "",
//               type: "address",
//             },
//           ],
//           name: "isUserAuthenticated",
//           outputs: [
//             {
//               internalType: "bool",
//               name: "",
//               type: "bool",
//             },
//           ],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [
//             {
//               internalType: "address",
//               name: "userAddress",
//               type: "address",
//             },
//             {
//               internalType: "uint256",
//               name: "amount",
//               type: "uint256",
//             },
//           ],
//           name: "issueTokensToUser",
//           outputs: [],
//           stateMutability: "nonpayable",
//           type: "function",
//         },
//         {
//           inputs: [
//             {
//               internalType: "address",
//               name: "",
//               type: "address",
//             },
//           ],
//           name: "merchants",
//           outputs: [
//             {
//               internalType: "string",
//               name: "name",
//               type: "string",
//             },
//             {
//               internalType: "address",
//               name: "walletAddress",
//               type: "address",
//             },
//             {
//               internalType: "string",
//               name: "aadharQRCode",
//               type: "string",
//             },
//             {
//               internalType: "string",
//               name: "merchantIdentifier",
//               type: "string",
//             },
//           ],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [
//             {
//               internalType: "address",
//               name: "to",
//               type: "address",
//             },
//             {
//               internalType: "uint256",
//               name: "amount",
//               type: "uint256",
//             },
//           ],
//           name: "mint",
//           outputs: [],
//           stateMutability: "nonpayable",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "name",
//           outputs: [
//             {
//               internalType: "string",
//               name: "",
//               type: "string",
//             },
//           ],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [
//             {
//               internalType: "address",
//               name: "owner",
//               type: "address",
//             },
//           ],
//           name: "nonces",
//           outputs: [
//             {
//               internalType: "uint256",
//               name: "",
//               type: "uint256",
//             },
//           ],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [
//             {
//               internalType: "address",
//               name: "owner",
//               type: "address",
//             },
//             {
//               internalType: "address",
//               name: "spender",
//               type: "address",
//             },
//             {
//               internalType: "uint256",
//               name: "value",
//               type: "uint256",
//             },
//             {
//               internalType: "uint256",
//               name: "deadline",
//               type: "uint256",
//             },
//             {
//               internalType: "uint8",
//               name: "v",
//               type: "uint8",
//             },
//             {
//               internalType: "bytes32",
//               name: "r",
//               type: "bytes32",
//             },
//             {
//               internalType: "bytes32",
//               name: "s",
//               type: "bytes32",
//             },
//           ],
//           name: "permit",
//           outputs: [],
//           stateMutability: "nonpayable",
//           type: "function",
//         },
//         {
//           inputs: [
//             {
//               internalType: "string",
//               name: "name",
//               type: "string",
//             },
//             {
//               internalType: "string",
//               name: "aadharQRCode",
//               type: "string",
//             },
//             {
//               internalType: "string",
//               name: "merchantIdentifier",
//               type: "string",
//             },
//           ],
//           name: "registerMerchant",
//           outputs: [],
//           stateMutability: "nonpayable",
//           type: "function",
//         },
//         {
//           inputs: [
//             {
//               internalType: "string",
//               name: "name",
//               type: "string",
//             },
//             {
//               internalType: "string",
//               name: "aadharQRCode",
//               type: "string",
//             },
//           ],
//           name: "registerUser",
//           outputs: [],
//           stateMutability: "nonpayable",
//           type: "function",
//         },
//         {
//           inputs: [
//             {
//               internalType: "bytes32",
//               name: "role",
//               type: "bytes32",
//             },
//             {
//               internalType: "address",
//               name: "account",
//               type: "address",
//             },
//           ],
//           name: "renounceRole",
//           outputs: [],
//           stateMutability: "nonpayable",
//           type: "function",
//         },
//         {
//           inputs: [
//             {
//               internalType: "bytes32",
//               name: "role",
//               type: "bytes32",
//             },
//             {
//               internalType: "address",
//               name: "account",
//               type: "address",
//             },
//           ],
//           name: "revokeRole",
//           outputs: [],
//           stateMutability: "nonpayable",
//           type: "function",
//         },
//         {
//           inputs: [
//             {
//               internalType: "bytes4",
//               name: "interfaceId",
//               type: "bytes4",
//             },
//           ],
//           name: "supportsInterface",
//           outputs: [
//             {
//               internalType: "bool",
//               name: "",
//               type: "bool",
//             },
//           ],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "symbol",
//           outputs: [
//             {
//               internalType: "string",
//               name: "",
//               type: "string",
//             },
//           ],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "totalSupply",
//           outputs: [
//             {
//               internalType: "uint256",
//               name: "",
//               type: "uint256",
//             },
//           ],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [
//             {
//               internalType: "address",
//               name: "to",
//               type: "address",
//             },
//             {
//               internalType: "uint256",
//               name: "amount",
//               type: "uint256",
//             },
//           ],
//           name: "transfer",
//           outputs: [
//             {
//               internalType: "bool",
//               name: "",
//               type: "bool",
//             },
//           ],
//           stateMutability: "nonpayable",
//           type: "function",
//         },
//         {
//           inputs: [
//             {
//               internalType: "address",
//               name: "from",
//               type: "address",
//             },
//             {
//               internalType: "address",
//               name: "to",
//               type: "address",
//             },
//             {
//               internalType: "uint256",
//               name: "amount",
//               type: "uint256",
//             },
//           ],
//           name: "transferFrom",
//           outputs: [
//             {
//               internalType: "bool",
//               name: "",
//               type: "bool",
//             },
//           ],
//           stateMutability: "nonpayable",
//           type: "function",
//         },
//         {
//           inputs: [
//             {
//               internalType: "address",
//               name: "",
//               type: "address",
//             },
//           ],
//           name: "users",
//           outputs: [
//             {
//               internalType: "string",
//               name: "name",
//               type: "string",
//             },
//             {
//               internalType: "address",
//               name: "walletAddress",
//               type: "address",
//             },
//             {
//               internalType: "string",
//               name: "aadharQRCode",
//               type: "string",
//             },
//             {
//               internalType: "bool",
//               name: "isAuthenticated",
//               type: "bool",
//             },
//           ],
//           stateMutability: "view",
//           type: "function",
//         },
//       ],
//     },
//   },
} as const;
// Remove the unnecessary "as const" assertion

export default externalContracts satisfies GenericContractsDeclaration;
