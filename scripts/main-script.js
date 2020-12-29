const hre = require("hardhat");

async function main() {

  await hre.run('compile');

  const ownerAddr = '0x546B4A7A30b3193Badf70E1d43D8142928F3db0b'
  // We get the contract to deploy
  const Presale = await hre.ethers.getContractFactory("PairxPresale");
  const presale = await Presale.deploy( ownerAddr , 1609675200 ); //end with 2021-1-3 20:00:00

  await presale.deployed();

  console.log("Owner address is :" , ownerAddr )
  console.log("Presale deployed to:", presale.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
