// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;

    constructor() {
        console.log("Hi Farza, this is my first hello-world contract! B)");
    }

    function sendWaves(uint256 waves) public {
        totalWaves += waves;
        console.log("%s has send %s!", msg.sender, waves);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }
}
