const payment = require('.')
const qr = require('./qrcode')

console.log(payment.ethereum({ address: '0x06D7b160F31C8a017b28F5dfbD784d29c4b12A04', amount: 1000 }))
console.log(qr.ethereum({ address: '0x06D7b160F31C8a017b28F5dfbD784d29c4b12A04', amount: 1000 }))
