// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract callContract {
    uint256 public x;

    constructor(uint256 _x) {
        x = _x;
    }

    function callFunction(address _contractAddress) public {
        (bool success, ) = _contractAddress.call(
            abi.encodeWithSignature("attempt()")
        );
        require(success);
    }

    // fallback function
    receive() external payable {}
}
