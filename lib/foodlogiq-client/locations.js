var http = require('http')
  , https = require('https')
  , url = require('url')
  , fc = require('./foodlogiq-connection');

module.exports = function(accessToken, businessId) {
  console.log('intializing locations wrapper with ' + accessToken + ','+businessId);

  if(!businessId) {
    throw new Error('cannot initialize locations wrapper without a businessId');
  }

  this.list = function(callback) {
    var conn = fc.init(accessToken);
    conn.get('/businesses/'+businessId+'/locations', function(err, locs) {
      if(err) return callback(err);
      callback(null, locs);
    });
  };

  this.create = function(product, callback) {
    var conn = fc.init(accessToken);
    conn.post('/businesses/'+businessId+'/locations', product, function(err, newLocation) {
      if(err) return callback(err);
      callback(null, newLocation);
    });
  };
};