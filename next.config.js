// next.config.js
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.po/,
      use: [
        {
          loader: '@lingui/loader'
        }
      ]
    })
    return config
  }
})