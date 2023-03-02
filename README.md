# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

# What is the goal of this repo?
The goal of this project was to call a function on a previously made solidity contract (A), from a different contract you create (B). However, this txn cannot be initiated by contract B. Logic on contract A states that tx.origin cannot equal msg.sender.

- msg.sender is what initiated the request. This will be the function in the contract B, and `msg.sender = address of contract B
- tx.origin is what initiated the entire txn. This is the EOA you connected to using your private key in the deploy.js.

# Why does this matter?
- Someone (EOA) can call a fn on a smart contract and interact with another smart contract. Make purchases, acquire NFT, transfer funds, etc.
- You can make calls from one smart contract to another, and track the account which made it.
- Useful to allow/disallow access, give NFT, keep track of who interacted

# Questions
- Why is this better than just calling the contract immediately? Does it just give you access to open source contracts?
