var path = require('path')
module.export = {
  build: {

  },
  dev: {
    env: require('./dev.env'),
    export: 8087,
    autoOpenBrowser: true,
    subDirectory: 'static',
    publicPath: '/',
      proxyTable: {
        '/api/**': 'http:localhost:8080'
      },
    cssSourceMap: false
  }
}
