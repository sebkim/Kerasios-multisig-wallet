const multisigAddr = '0xd7f00d4fa308b725f73d140fe0c0fd7d959b27ca'
const getWeb3 = require('../utils/web3');
const MultiSigWalletJSON = require('../build/contracts/MultiSigWallet.json');
const program = require('commander');
const web3 = getWeb3(0);

program
  .command('addOwner <arg>')
  .description('call addOwner')
  .option('-g, --gas <number>', "Gas Price")
  .option('-s, --simple', "Boolean that indicates simply print encodeABI")
  .action(async (arg, options) => {
    let gasPrice = 6000000000;
    if(options.gas) {
      gasPrice = options.gas
    }

    accounts = await web3.eth.getAccounts()
    const account = accounts[0];
    console.log(accounts.slice(0, 2))

    const hContract = new web3.eth.Contract(MultiSigWalletJSON.abi, multisigAddr)
    const encodeABI = hContract.methods.addOwner(arg).encodeABI()

    console.log(`encodeABI: ${encodeABI}`)

    if(options.simple) {
      process.exit(0)
    }

    const transactionCount = await hContract.methods.getTransactionCount(true, true).call()

    const transRes = await hContract.methods.submitTransaction(multisigAddr, 0, encodeABI).send({
      from: account,
      gasPrice: gasPrice,
      gas: 6000000,
    })
    console.log(transRes)
    console.log('done!')
    process.exit(0)
  })

program 
  .command('removeOwner <arg>')
  .description('call removeOwner')
  .option('-g, --gas <number>', "Gas Price")
  .option('-s, --simple', "Boolean that indicates simply print encodeABI")
  .action(async (arg, options) => {
    let gasPrice = 6000000000;
    if(options.gas) {
      gasPrice = options.gas
    }

    accounts = await web3.eth.getAccounts()
    const account = accounts[0];
    console.log(accounts.slice(0, 2))

    const hContract = new web3.eth.Contract(MultiSigWalletJSON.abi, multisigAddr)
    const encodeABI = hContract.methods.removeOwner(arg).encodeABI()

    console.log(`encodeABI: ${encodeABI}`)

    if(options.simple) {
      process.exit(0)
    }

    const transactionCount = await hContract.methods.getTransactionCount(true, true).call()

    const transRes = await hContract.methods.submitTransaction(multisigAddr, 0, encodeABI).send({
      from: account,
      gasPrice: gasPrice,
      gas: 6000000,
    })
    console.log(transRes)
    console.log('done!')
    process.exit(0)
  })

program 
  .command('changeRequirement <arg>')
  .description('call removeOwner')
  .option('-g, --gas <number>', "Gas Price")
  .option('-s, --simple', "Boolean that indicates simply print encodeABI")
  .action(async (arg, options) => {
    let gasPrice = 6000000000;
    if(options.gas) {
      gasPrice = options.gas
    }

    accounts = await web3.eth.getAccounts()
    const account = accounts[0];
    console.log(accounts.slice(0, 2))

    const hContract = new web3.eth.Contract(MultiSigWalletJSON.abi, multisigAddr)
    const encodeABI = hContract.methods.changeRequirement(arg).encodeABI()

    console.log(`encodeABI: ${encodeABI}`)

    if(options.simple) {
      process.exit(0)
    }

    const transactionCount = await hContract.methods.getTransactionCount(true, true).call()

    const transRes = await hContract.methods.submitTransaction(multisigAddr, 0, encodeABI).send({
      from: account,
      gasPrice: gasPrice,
      gas: 6000000,
    })
    console.log(transRes)
    console.log('done!')
    process.exit(0)
  })
  
program
  .version('0.1.0')
  .parse(process.argv)