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

  this.create = function(location, callback) {
    var conn = fc.init(accessToken);
    conn.post('/businesses/'+businessId+'/locations', location, function(err, newLocation) {
      if(err) return callback(err);
      callback(null, newLocation);
    });
  };

  this.find = function(locationId, callback) {
    var conn = fc.init(accessToken);
    conn.get('/businesses/'+businessId+'/locations/'+locationId, function(err, foundLoc) {
      if(err) return callback(err);
      callback(null, foundLoc);
    });
  };

  this.edit = function(locationId, location, callback) {
    var conn = fc.init(accessToken);
    conn.put('/businesses/'+businessId+'/locations/'+locationId, location, function(err, edittedLoc) {
      if(err) return callback(err);
      callback(null, edittedLoc);
    });
  };

  this.delete = function(id, callback){
    var conn = fc.init(accessToken);
    conn.delete('/businesses/'+businessId+'/locations/'+id, function(err) {
      if(err) return callback(err);
      callback(null, 200);
    });
  };
};