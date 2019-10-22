const Web3 = require('web3')

const rpcURL = 'https://ropsten.infura.io/v3/c34d06bee82244da9464de025a0db10b'

const web3 = new Web3(rpcURL)

const Tx = require('ethereumjs-tx').Transaction

const senderAddress = '0x82312E14D28cD08D6B9CD39d3472795246141d1C'
const senderPrivateKey = Buffer.from('fde8ee6bd185b794c1e97b046f023e35aa499df37c4cdcffc962f9a67d5f2182', 'hex')
const recipientAddress = '0x80a36f5E760fDF59d947b0ba924199D1A3469221'
const recipientPrivateKey = Buffer.from('2560f24602d164196bce91136805802e7ca503ce61a1e0a11aeb3bf3675f3428', 'hex')

web3.eth.getTransactionCount(senderAddress, (err, txCount) => {

    const txObject = {
        nonce: web3.utils.toHex(txCount),
        to: recipientAddress,
        value: web3.utils.toHex(web3.utils.toWei('1', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }

    const tx = new Tx(txObject, { chain: 'ropsten' })
    tx.sign(senderPrivateKey)

    const serializedTx = tx.serialize()

    const raw = '0x' + serializedTx.toString('hex')

    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        if (err) console.log(err)
        else console.log('txHash: ', txHash)
    })
})


