const hre = require("hardhat");

async function main() {
  // hre.network.config.gas = 30000000
  // console.log( hre.network )
  await hre.run('compile');
  // const owner = '0x78B50D236b55E24206b5eEE74a7EBb3F9AEB9466'
  const factory = '0x74f9a817695fD6b895ec22A7fBBF78FA19fb4DED'
  const weth = '0xf21a12D76a5Df6A1dd2C028D8540DB39382eA77f'
  // We get the contract to deploy
  const RouterV2 = await hre.ethers.getContractFactory("UniswapV2Router01");
  //const presale = await Presale.deploy('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266' , 1577980800 );
  const routerv2 = await RouterV2.deploy(  factory , weth , {
    // from : '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266'
  });

  await routerv2.deployed();

  console.log(`Factory address is ${factory}`)
  console.log(`WETH address is ${weth}`)
  console.log("RouterV2 deployed to:", routerv2.address )
  // console.log("WETH contract address is : " , weth.address )
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
