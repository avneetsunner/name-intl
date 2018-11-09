const client = require('./client');

exports.init = function(locale) {
    client.locale = locale
    return client;
  }

