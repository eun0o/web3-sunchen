const Web3 = require('web3')
const rpcURL = 'https://ropsten.infura.io/v3/c34d06bee82244da9464de025a0db10b'
const web3 = new Web3(rpcURL)

//web3.eth.getBlockNumber().then(console.log)

//web3.eth.getBlock(1).then(console.log)
web3.eth.getTransaction('0xff0e8fc9cd5f3374a62c7364ad3ff6c274e5c116301696a01d49f47ac4418826').then(console.log)