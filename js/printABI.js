const getWeb3 = require('../utils/web3');
const MultiSigWalletFactoryJSON = require('../build/contracts/MultiSigWalletFactory.json');
const web3 = getWeb3(0);

const main = async () => {
    accounts = await web3.eth.getAccounts()
    console.log(accounts.slice(0, 2))
    
    console.log(JSON.stringify(MultiSigWalletFactoryJSON.abi))
}

main()