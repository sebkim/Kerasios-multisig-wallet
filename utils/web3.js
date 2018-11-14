const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const path = require('path')
const fs = require('fs-extra');
const mnemonic = fs.readFileSync(path.resolve(__dirname, '../mnemonic.txt'), 'utf8')


const getProvider = (accountInd) => {
    const provider = new HDWalletProvider(
        mnemonic,
        'https://mainnet.infura.io/G6jiWFDK2hiEfZVJG8w1',
        accountInd
    );
    return provider;
}

const getWeb3 = (accountInd) => {
    const provider = getProvider(accountInd)
    const web3 = new Web3(provider);
    return web3;
}

module.exports = getWeb3
