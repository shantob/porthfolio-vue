//-----=====|| VUE CONFIG FILE ||=====-----
const { defineConfig } = require('@vue/cli-service')
  module.exports = defineConfig ({
      transpileDependencies: true,
      chainWebpack: config => {
        config.module
          .rule('pdf')
          .test(/\.pdf$/)
          .use('file-loader')
          .loader('file-loader')
          .options({
            name: 'assets/CV/[name].[hash:8].[ext]'
          })
          .end();
      }
})
