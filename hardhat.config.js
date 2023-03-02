require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: process.env.GOERLI_TESTNET_API_URL,
      accounts: [process.env.GOERLI_PRIVATE_KEY]
    },
  }
};