const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Profile/'
    : '/',
  pwa: {
    manifestPath: 'manifest.json',
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true
    }
  }
})
