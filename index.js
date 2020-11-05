const url = require('url')

function bitcoin ({ address, amount, label, message, lightning }) {
  const uri = {
    protocol: 'bitcoin',
    hostname: address,
    pathname: '',
    query: {}
  }

  if (amount != null) uri.query.amount = amount
  if (label != null) uri.query.label = label
  if (message != null) uri.query.message = message
  if (lightning != null) uri.query.lightning = lightning

  return url.format(uri)
}

function lightning ({ lnurl }) {
  const uri = {
    protocol: 'lightning',
    hostname: lnurl,
    pathname: '',
    query: {}
  }

  return url.format(uri)
}

function ethereum ({ address, functionName = '', args = {}, amount, gas, gasLimit, gasPrice, chainId }) {
  const uri = {
    protocol: 'ethereum',
    username: chainId,
    hostname: address,
    pathname: functionName,
    query: {
      ...args
    }
  }

  if (amount != null) uri.query.value = amount.toExponential()
  if (gas != null) uri.query.gas = gas
  if (gasLimit != null) uri.query.gasLimit = gasLimit
  if (gasPrice != null) uri.query.gasPrice = gasPrice

  return url.format(uri)
}

module.exports = {
  bitcoin,
  ethereum,
  lightning
}
