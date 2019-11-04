const withCSS = require('@zeit/next-css');
const path = require('path');

const env = process.env.NODE_ENV || 'development';

module.exports = withCSS({
  publicRuntimeConfig: {
    nodeEnvironment: env,
  },
  webpack(config) {
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
});
