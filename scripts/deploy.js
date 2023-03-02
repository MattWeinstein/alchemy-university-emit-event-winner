
const hre = require("hardhat");

async function main() {

  const url = process.env.GOERLI_TESTNET_API_URL;
  let artifacts = await hre.artifacts.readArtifact("callContract");
  const provider = new ethers.providers.JsonRpcProvider(url);
  let privateKey = process.env.GOERLI_PRIVATE_KEY;

  let wallet = new ethers.Wallet(privateKey, provider);

  // Create an instance of a factory for the contract
  let factory = new ethers.ContractFactory(artifacts.abi, artifacts.bytecode, wallet);

  let contractname = await factory.deploy(2);

  console.log("Contract address:", contractname.address);

  await contractname.deployed();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });