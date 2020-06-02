# `crypto-payment-url`

[![Build Status](https://travis-ci.com/hyperdivision/crypto-payment-url.svg?branch=master)](https://travis-ci.com/hyperdivision/crypto-payment-url)

> Generate payment URLs and QR Codes for cryptocurrencies

## Usage

```js
var payment = require('crypto-payment-url')
var qr = require('crypto-payment-url/qrcode')

// Create two different ethereum payment urls for 1000 Wei and 100000 Wei
payment.ethereum({ address: '0x06D7b160F31C8a017b28F5dfbD784d29c4b12A04', amount: 1000 })
qr.ethereum({ address: '0x4ec8bb2d0bba6314c43dd41f5ae00e06dd8591e9', amount: 100000 })

// Adding in a LN invoice in an URL
payment.bitcoin({ lightning: 'lnbc9678785340p1pwmna7lpp5gc3xfm08u9qy06djf8dfflhugl6p7lgza6dsjxq454gxhj9t7a0sd8dgfkx7cmtwd68yetpd5s9xar0wfjn5gpc8qhrsdfq24f5ggrxdaezqsnvda3kkum5wfjkzmfqf3jkgem9wgsyuctwdus9xgrcyqcjcgpzgfskx6eqf9hzqnteypzxz7fzypfhg6trddjhygrcyqezcgpzfysywmm5ypxxjemgw3hxjmn8yptk7untd9hxwg3q2d6xjcmtv4ezq7pqxgsxzmnyyqcjqmt0wfjjq6t5v4khxxqyjw5qcqp2rzjq0gxwkzc8w6323m55m4jyxcjwmy7stt9hwkwe2qxmy8zpsgg7jcuwz87fcqqeuqqqyqqqqlgqqqqn3qq9qn07ytgrxxzad9hc4xt3mawjjt8znfv8xzscs7007v9gh9j569lencxa8xeujzkxs0uamak9aln6ez02uunw6rd2ht2sqe4hz8thcdagpleym0j' })
qr.bitcoin({ lightning: 'lnbc9678785340p1pwmna7lpp5gc3xfm08u9qy06djf8dfflhugl6p7lgza6dsjxq454gxhj9t7a0sd8dgfkx7cmtwd68yetpd5s9xar0wfjn5gpc8qhrsdfq24f5ggrxdaezqsnvda3kkum5wfjkzmfqf3jkgem9wgsyuctwdus9xgrcyqcjcgpzgfskx6eqf9hzqnteypzxz7fzypfhg6trddjhygrcyqezcgpzfysywmm5ypxxjemgw3hxjmn8yptk7untd9hxwg3q2d6xjcmtv4ezq7pqxgsxzmnyyqcjqmt0wfjjq6t5v4khxxqyjw5qcqp2rzjq0gxwkzc8w6323m55m4jyxcjwmy7stt9hwkwe2qxmy8zpsgg7jcuwz87fcqqeuqqqyqqqqlgqqqqn3qq9qn07ytgrxxzad9hc4xt3mawjjt8znfv8xzscs7007v9gh9j569lencxa8xeujzkxs0uamak9aln6ez02uunw6rd2ht2sqe4hz8thcdagpleym0j' })
```

## API

### `cryptoUrl.ethereum({ address, functionName, args, amount, gas, gasLimit, gasPrice, chainId })`

Returns a `String` encoding the above parameters as a `ethereum:` URL.
Be aware that some wallets do not support all parameters.
Specified in [EIP 681: URL Format for Transaction Requests](https://eips.ethereum.org/EIPS/eip-681)

### `cryptoUrl.bitcoin({ address, amount, label, message, lightning })`

Returns a `String` encoding the above parameters as a `bitcoin:` URL.
Be aware that some wallets do not support all parameters.
Specified in [BIP 21: URI Scheme](https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki)

### `cryptoUrlQr.ethereum({ address, functionName, args, amount, gas, gasLimit, gasPrice, chainId })`

Works like `cryptoUrl.ethereum`, but returns an object of `{ qrcode: String, url: String }`,
Where `qrcode` is a string of SVG code.

### `cryptoUrlQr.bitcoin({ address, amount, label, message, lightning })`

Works like `cryptoUrl.bitcoin`, but returns an object of `{ qrcode: String, url: String }`,
Where `qrcode` is a string of SVG code.

## Install

```sh
npm install crypto-payment-url
```

## License

[ISC](LICENSE)
