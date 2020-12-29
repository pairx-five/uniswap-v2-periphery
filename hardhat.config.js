require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.6.6",
  defaultNetwork : 'localhost' ,
  networks: {
    localhost: {
      live: true,
      saveDeployments: true,
      tags: ["local"] ,
      // gas : 30000000 ,
      gasMultiplier : 3 ,
      // from : '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266' ,
      // accounts : ['0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80']
    },
    // main: {
    //   live: true ,
    //   saveDeployments: true,
    //   url : 'https://mainnet.infura.io/v3/349a8025dc474959822b544539e4d7d9'  ,
    //   tags: ["main"] ,
    //   // accounts : ['']
    // },
    ropsten : {
      live: true ,
      url : 'https://ropsten.infura.io/v3/c1979c15a0f2435d9cf6dbc55bd05c0a'  ,
      // forking : {
      //   url : 'https://ropsten.infura.io/v3/c1979c15a0f2435d9cf6dbc55bd05c0a' 
      // } ,
      accounts : ["0x8fb4808edadbc45d9c5426f7684fe0ad7ea37a9e97da72cd8f1c946eb3102df4"],
      saveDeployments: true,
      tags: ["ropsten"]
    }
  }
};

