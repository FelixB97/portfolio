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
        subpage3: resolve(__dirname, 'html/pages/singleview1.html'),
        subpage4: resolve(__dirname, 'html/pages/singleview2.html'),
        subpage5: resolve(__dirname, 'html/pages/singleview3.html'),
        subpage6: resolve(__dirname, 'html/pages/singleview4.html'),
        subpage7: resolve(__dirname, 'html/pages/singleview5.html'),
        subpage8: resolve(__dirname, 'html/pages/singleview6.html')
      }
    }
  }
}