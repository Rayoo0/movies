'use strict';

/**
 * Module dependencies.
 */
var config = require('../config'),
  chalk = require('chalk'),
  path = require('path'),
  mongoose = require('mongoose');

// Load the mongoose models
module.exports.loadModels = function (callback) {
  // Globbing model files
  config.files.server.models.forEach(function (modelPath) {
    require(path.resolve(modelPath));
  });

  if (callback) callback();
};

// Initialize Mongoose
module.exports.connect = function (cb) {
  var _this = this;
//config.db.uri, config.db.options
  var db = mongoose.connect('mongodb://Rayoo0:Rayan123@ds055752.mlab.com:55752/mean-dev', function (err) {
    // Log Error
    if (err) {
      console.error(chalk.red('Could not connect to MongoDB!'));
      console.log(err);
    } else {

      // Enabling mongoose debug mode if required
      mongoose.set('debug', config.db.debug);

      // Call callback FN
      if (cb) cb(db);
    }
  });
};

module.exports.disconnect = function (cb) {
  mongoose.disconnect(function (err) {
    console.info(chalk.yellow('Disconnected from MongoDB.'));
    cb(err);
  });
};
