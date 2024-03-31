# CivicFlow

<h4 align="center">
  <a href="https://scaffoldeth.io">Website</a>
</h4>

⚙️ Built using NextJS, Scaffold-Eth-2, Anon Aadhaar, The Graph Protocol, Hardhat, Wagmi, Viem, and Typescript.

🚀 CivicFlow is a decentralized application that allows users to create and manage their digital identity on the blockchain. It uses the Anon Aadhaar protocol to create a unique digital identity for each user. Users can use their digital identity to access various services and applications on the blockchain.

## Requirements

Before you begin, you need to install the following tools:

- [Node (>= v18.17)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with CivicFlow, follow the steps below:

1. Clone this repo & install dependencies

```
git clone https://github.com/scaffold-eth/scaffold-eth-2.git
cd scaffold-eth-2
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```
![7](https://github.com/ManasPatil0967/ethmumbai/assets/93768529/f4f26854-f6d5-48fa-bdfc-cca7b8b1253f)
![6](https://github.com/ManasPatil0967/ethmumbai/assets/93768529/d9023e10-d87e-45b9-b05e-70dd4ebacb57)

## Contributors of CivicFlow

[Manas Patil](https://github.com/ManasPatil0967)
[Bhavin Jobanputra](https://github.com/Bhavinj13)
[Dhruv Chauhan](https://github.com/dhruvin101)
[Aditya Repe](https://github.com/adityarepe)
