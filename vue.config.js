const webpack = require('webpack')

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        moment: 'moment',
      })
    ]
  }
};
