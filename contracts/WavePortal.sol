// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract WavePortal {
    
    // Events
    event NewWave(address indexed from, uint256 timestamp, string message);

    // Interfaces
    struct Wave {
        address waver;
        string message;
        uint waves;
        uint256 timestamp;
    }

    uint256 totalWaves;
    Wave[] waves;

    constructor() {
        console.log("This is a really cool contract. And remember, HODL always and anyway.");
    }

    // Writes

    function wave(string memory _message, uint _waves) public {

        totalWaves += _waves;
        console.log("%s waved w/ message '%s'", msg.sender, _message);

        waves.push(Wave(msg.sender, _message, _waves, block.timestamp));

        emit NewWave(msg.sender, block.timestamp, _message);

    }

    // Reads

    function getAllWaves() public view returns (Wave[] memory) {
        return waves;
    }

    function getTotalWaves() public view returns (uint256) {
        return totalWaves;
    }
}
