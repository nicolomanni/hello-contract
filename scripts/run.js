
const main = async () => {

    // Get signers
    const [owner, randomPerson, anotherOne, lastOne] = await hre.ethers.getSigners();

    // Deploy contract
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy()
    await waveContract.deployed();

    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract deployed by:", owner.address);

    // Show first amount
    await waveContract.getTotalWaves();
    
    // Friends greetings 
    let txn = await waveContract.connect(randomPerson).wave(2)
    await txn.wait()
    
    txn = await waveContract.connect(anotherOne).wave(3)
    await txn.wait()

    txn = await waveContract.connect(lastOne).wave(4)
    await txn.wait()

    txn = await waveContract.connect(randomPerson).wave(4)
    await txn.wait()

    txn = await waveContract.connect(lastOne).wave(10)
    await txn.wait()

    // Total
    await waveContract.getTotalWaves()
}

const runMain = async () => {
  try {
    await main();
    process.exit(0); // exit Node process without error
  } catch (error) {
    console.log(error);
    process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
  }
  // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
};

runMain();