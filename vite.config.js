// vite.config.js
const { resolve } = require('path')

module.exports = {
  base: './',
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