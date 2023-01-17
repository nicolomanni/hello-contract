// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;
    uint256 totalFriends;
    mapping(address => uint256) friends;

    constructor() {
        console.log("Hi Farza, this is my first hello-world contract! B)");
    }

    function wave(uint waves) public {
        totalWaves += waves;
        friends[msg.sender] += waves;
        console.log("%s has waved %d times. Total: %d", msg.sender, waves, friends[msg.sender]);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }
}
