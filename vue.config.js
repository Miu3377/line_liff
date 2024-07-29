const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    historyApiFallback: true,
    allowedHosts: "all",
    // other devServer configurations...
    client: {
      webSocketURL: 'wss://925b-123-195-7-8.ngrok-free.app/ws',
      overlay:false
    },
  },
})
