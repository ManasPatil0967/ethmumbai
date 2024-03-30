import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // Check if the deployment script is tagged with "YourContract"
  if (deployYourContract.tags?.includes("YourContract")) {
    // Deploy the MyToken contract with the deployer as both the defaultAdmin and minter
    await deploy("MyToken", {
      from: deployer,
      args: [deployer, deployer], // Pass deployer as both defaultAdmin and minter
      log: true,
      autoMine: true,
    });

    // Get the deployed MyToken contract to interact with it after deploying.
    const myToken = await hre.ethers.getContract<Contract>("MyToken", deployer);
    console.log("MyToken deployed to:", myToken.address);
  }

  // Check if the deployment script is tagged with "CombinedTokenUserLogin"
  if (deployYourContract.tags?.includes("CombinedTokenUserLogin")) {
    // Deploy the CombinedTokenUserLogin.sol
    await deploy("CombinedTokenUserLogin", {
      from: deployer,
      // Add constructor arguments for CombinedTokenUserLogin.sol if any
      args: [deployer, deployer], // Replace with actual constructor arguments if needed
      log: true,
      autoMine: true,
    });

    // Get the deployed CombinedTokenUserLogin.sol to interact with it after deploying.
    const CombinedTokenUserLogin = await hre.ethers.getContract<Contract>("CombinedTokenUserLogin", deployer);
    console.log("CombinedTokenUserLogin deployed to:", CombinedTokenUserLogin.address);
  }
};

export default deployYourContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployYourContract.tags = ["YourContract", "CombinedTokenUserLogin"];
