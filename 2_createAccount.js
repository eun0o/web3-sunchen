const Web3 = require('web3')
const rpcURL = 'https://ropsten.infura.io/v3/c34d06bee82244da9464de025a0db10b'
const web3 = new Web3(rpcURL)

const account = web3.eth.accounts.create()

console.log('address :', account.address)
console.log('pricateKey :', account.privateKey)