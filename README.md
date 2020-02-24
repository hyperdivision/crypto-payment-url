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

### `cryptoUrl.bitcoin({ address, amount, label, message, lightning })`

### `cryptoUrlQr.ethereum({ address, functionName, args, amount, gas, gasLimit, gasPrice, chainId })`

### `cryptoUrlQr.bitcoin({ address, amount, label, message, lightning })`

## Install

```sh
npm install crypto-payment-url
```

## License

[ISC](LICENSE)
