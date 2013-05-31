var http = require('http')
  , https = require('https')
  , url = require('url')
  , fc = require('./foodlogiq-connection');
  
module.exports = function(accessToken) {
  console.log('intializing businesses wrapper with ' + accessToken);
  
  this.create = function(newBiz, callback) {
    var conn = fc.init(accessToken);
    conn.post('/businesses', newBiz, function(err, newBizPost) {
      if(err) return callback(err);
      callback(null, newBizPost);
    });
  };
  
  this.list = function(callback) {
    var conn = fc.init(accessToken);
    conn.get('/businesses', function(err, newBizPost) {
      if(err) return callback(err);
      callback(null, newBizPost);
    });
  };
};
