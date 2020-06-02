# `crypto-payment-url`

[![Build Status](https://travis-ci.com/hyperdivision/crypto-payment-url.svg?branch=master)](https://travis-ci.com/hyperdivision/crypto-payment-url)

> Generate payment URLs and QR Codes for cryptocurrencies

## Usage

```js
var cryptoUrl = require('crypto-payment-url')
var cryptoUrlQr = require('crypto-payment-url/qrcode')
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
