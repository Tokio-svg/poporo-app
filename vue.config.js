const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'docs',
  publicPath: './',
  assetsDir: './',
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        mac: {
          icon: 'public/favicon.png',
        },
        win: {
          icon: 'public/favicon.png',
        }
      }
    }
  }
})
