require('webpack')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const path = require('path')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
    register: true
  },
})
