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
