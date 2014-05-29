'use strict';

var winston = require('winston');

module.exports = function(conn) {
  return  {
    list: function(callback) {
      conn.get('/businesses', callback);
    },

    find: function(businessId, callback) {
      conn.get('/businesses/'+businessId, callback);
    },
  }
};
