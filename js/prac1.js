// multisig wallet address
// 0xd7f00d4fa308b725f73d140fe0c0fd7d959b27ca

const multisigAddr = '0xd7f00d4fa308b725f73d140fe0c0fd7d959b27ca'
const getWeb3 = require('../utils/web3');
const MultiSigWalletJSON = require('../build/contracts/MultiSigWallet.json');
const web3 = getWeb3(0);

const main = async () => {
    accounts = await web3.eth.getAccounts()
    console.log(accounts.slice(0, 2))
    
    const hContract = new web3.eth.Contract(MultiSigWalletJSON.abi, multisigAddr)
    // const encodeABI = hContract.methods.changeRequirement('1').encodeABI()
    const encodeABI = hContract.methods.addOwner('0x39fc25C81696B6654b4c872a4cc48Ba48A59ab7D').encodeABI()

    console.log(encodeABI)
}

main()