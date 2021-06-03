// vite.config.js
const { resolve } = require('path')

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        subpage: resolve(__dirname, 'works.html'),
        subpage2: resolve(__dirname, 'contact.html')
      }
    }
  }
}