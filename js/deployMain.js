// mainnet factory address
// 0x42126C792eAC58F53E2DB1586Da3D3C7aCcD3b6e
// mainnet multisig wallet address
// 0xd7f00d4fa308b725f73d140fe0c0fd7d959b27ca

const MultiSigWalletFactoryJSON = require('../build/contracts/MultiSigWalletFactory.json');
const program = require('commander');
const getWeb3 = require('../utils/web3')

program
  .command('deploy')
  .description('deploy MultiSigWalletFactory')
  .option('-g, --gas <number>', "Gas Price")
  .option('-f, --fromAccount <number>', "From account of this mnemonic")
  .action(async (options) => {
    const gasPrice = options.gas;
    const fromAccountInd = options.fromAccount;
    if(gasPrice == null || fromAccountInd == null) {
      console.log("Please specify all required options!")
    }

    const web3 = getWeb3(fromAccountInd);
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];

    console.log('Attempting to deploy from account', account);
    console.log("");

    let whichAbi = null;
    let whichBytecode = null;
    whichAbi = MultiSigWalletFactoryJSON.abi
    whichBytecode = MultiSigWalletFactoryJSON.bytecode;

    let trans_res = await new web3.eth.Contract(
        whichAbi
    )
    .deploy({
        data: whichBytecode
    })
    .send({
        from: account,
        gasPrice: gasPrice,
        gas: 6000000
    });
    console.log("Deployed contract to ", trans_res.options.address)
    console.log("Done!")
  })

program
  .version('0.1.0')
  .parse(process.argv)