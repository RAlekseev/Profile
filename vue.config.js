const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    manifestPath: 'manifest.json',
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true
    }
  }
})
