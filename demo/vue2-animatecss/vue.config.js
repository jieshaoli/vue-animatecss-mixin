const path = require('path')
const isProd = process.env.NODE_ENV === "production";
const isPage = process.env.VUE_APP_ENV === "page"

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // https://cli.vuejs.org/zh/config/#publicpath
  publicPath: isPage ? "/vue-animatecss-mixin/vue/" : "/",

  // https://cli.vuejs.org/zh/config/#productionsourcemap
  productionSourceMap: isProd ? false : true,

  // https://cli.vuejs.org/zh/config/#configurewebpack
  configureWebpack: {
    output: {
      filename: `js/[name].[hash].js`,
      chunkFilename: `js/[name].[hash].js`
    },

    resolve: {
      alias: {
        '@': resolve('src'),
      }
    }
  },

  // https://cli.vuejs.org/zh/config/#devserver
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: 8081,
  },
}