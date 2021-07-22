// vite.config.js
const { resolve } = require('path')

module.exports = {
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        subpage: resolve(__dirname, 'works.html'),
        subpage2: resolve(__dirname, 'contact.html'),
        singleview1: resolve(__dirname, 'singleview1.html'),
        singleview2: resolve(__dirname, 'singleview2.html'),
        singleview3: resolve(__dirname, 'singleview3.html'),
        singleview4: resolve(__dirname, 'singleview4.html'),
        singleview5: resolve(__dirname, 'singleview5.html'),
        singleview6: resolve(__dirname, 'singleview6.html')
      }
    }
  }
}