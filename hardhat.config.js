require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const { INFURA_API_KEY, PRIVATE_KEY, PRIVATE_KEY1, PRIVATE_KEY2, PRIVATE_KEY3 } = process.env;
const { ethers } = require("ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.25",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [
        PRIVATE_KEY,
        PRIVATE_KEY1,
        PRIVATE_KEY2,
        PRIVATE_KEY3
      ].filter(key => key !== undefined), // Filter out undefined keys
      chainId: 11155111,
    },
  }
};
