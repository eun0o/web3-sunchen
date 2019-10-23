const Web3 = require('web3')
const rpcURL = 'https://ropsten.infura.io/v3/c34d06bee82244da9464de025a0db10b'
const web3 = new Web3(rpcURL)


const contractAddress = '0xAe871F4A12A1Af402308fdB9C5AF29762bc6dbeE'
const abi = require('./erc20ABI')

const contract = new web3.eth.Contract(abi, contractAddress)

contract.getPastEvents('Transfer', {
    // filter: { from: '0x82312E14D28cD08D6B9CD39d3472795246141d1C'},
    fromBlock: 0,
    // toBlock: 'latest'
	}, function(error, events){
		for (i=0; i<events.length; i++) {
            var eventObj = events[i];
            console.log(eventObj)
		}
});