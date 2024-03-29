
const main = async () => {

    // Deploy contract
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy()
    await waveContract.deployed();
    console.log("Contract deployed to: ", waveContract.address);

    let waveCount;
    waveCount = await waveContract.getTotalWaves();
    console.log("Total waves: ", waveCount.toNumber());
    
    let waveTxn = await waveContract.wave("Yo bitch!", 5);
    await waveTxn.wait();

    const [_, randomPerson] = await hre.ethers.getSigners();
    waveTxn = await waveContract.connect(randomPerson).wave("Hey my friend! What's up?", 10);
    await waveTxn.wait()

    let allWaves = await waveContract.getAllWaves();
    console.log("All waves: ", allWaves);
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