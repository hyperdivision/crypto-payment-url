var QRCode = require('qrcode-svg')
var urls = require('.')

module.exports = {
  bitcoin: wrap(urls.bitcoin),
  lightning: wrap(urls.lightning),
  ethereum: wrap(urls.ethereum)
}

function wrap (fn) {
  return function (coinOpts, qrOpts = {}) {
    var url = fn(coinOpts)

    return {
      qrcode: new QRCode({
        content: url,
        width: 256,
        height: 256,
        ecl: 'L',
        join: true,
        pretty: false,
        xmlDeclaration: false,
        container: 'svg-viewbox',
        predefined: true,
        ...qrOpts
      }).svg(),
      url
    }
  }
}
