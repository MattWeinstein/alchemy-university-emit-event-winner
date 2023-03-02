const hre = require("hardhat")

const CONTRACT_ADDR = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502"
const MYCONTRACT_ADDR = "0x157112E1F264C29BFfF2E9698789B9035d25b1D0"

async function main() {

    const contract = await hre.ethers.getContractAt("callContract", MYCONTRACT_ADDR)

    await contract.callFunction(CONTRACT_ADDR)

    console.log('done')
}
main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})


// Succesful txn - https://goerli.etherscan.io/tx/0x56d27eb8822f6b144b525ef44d3512e1290695e36462eb46abfad136564a7b80


// The goal of this project was to call a function on a solidity contract, not directly from the contract
// The task was tx.origin cannot equal msg.sender
    // msg.sender is what initiated the request. This will be the function in the contract, and msg.sender = contract address
    // tx.origin, is that initiated the entire txn. This is the EOA you connected to using your private key in the deploy.js

// Why does this matter?
    // Someone (EOA) can connect to a smart contract and make purchases or other stuff
    // You can make calls from one smart contract to another, and track the account which made it.
    // You can do anything with this info
        // Ex. allow/disallow access, give NFT, keep track of who interacted