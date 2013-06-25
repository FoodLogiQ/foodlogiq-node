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

  this.find = function(businessId, callback) {
    var conn = fc.init(accessToken);
    conn.get('/businesses/'+businessId, function(err, biz) {
      if(err) return callback(err);
      callback(null, biz);
    });
  };

  this.edit = function(businessId, business, callback) {
    var conn = fc.init(accessToken);
    conn.put('/businesses/'+businessId, business, function(err, edittedBiz) {
      if(err) return callback(err);
      callback(null, edittedBiz);
    });
  };
};
