const path = require('path');

const appRootDir = require('app-root-dir');

module.exports = {
  alias: {
    '@': path.resolve(appRootDir.get(), './client/'),
    '@routes': path.resolve(appRootDir.get(), './client/routes/'),
    '@components': path.resolve(appRootDir.get(), './client/components/'),
    '@assets': path.resolve(appRootDir.get(), './client/assets/'),
  },
};
