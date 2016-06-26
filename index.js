/* jshint node: true */
'use strict';

var FastbootS3DeployPlugin = require('./lib/fastboot-s3-deploy-plugin');

module.exports = {
  name: 'ember-cli-deploy-fastboot-s3',

  createDeployPlugin: function(options) {
    return new FastbootS3DeployPlugin({
      name: options.name
    });
  }
};
