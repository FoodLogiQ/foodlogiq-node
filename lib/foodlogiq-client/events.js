var http = require('http')
  , https = require('https')
  , url = require('url')
  , fc = require('./foodlogiq-connection');
  
module.exports = function(accessToken, businessId) {
  console.log('intializing locations wrapper with ' + accessToken + ','+businessId);
  
  if(!businessId) { 
    throw new Error('cannot initialize events wrapper without a businessId');
  }

  this.get = function(eventId, callback){
    var conn = fc.init(accessToken);
    conn.get('/businesses/'+businessId+'/events/' + eventId, function(err, evt) {
      if(err) return callback(err);
      callback(null, evt);
    });
  };
  
  this.list = function(callback) {    
    var conn = fc.init(accessToken);
    conn.get('/businesses/'+businessId+'/events', function(err, events) {
      if(err) return callback(err);
      callback(null, events);
    });
  };

  this.listByType = function(type, callback){
    var conn = fc.init(accessToken);
    conn.get('/businesses/'+businessId+'/events/' + '?type=' + type, function(err, events) {
      if(err) return callback(err);
      callback(null, events);
    });
  }
  
  this.create = function(event, callback) {
    var conn = fc.init(accessToken);
    conn.post('/businesses/'+businessId+'/events', event, function(err, newEvent) {
      if(err) return callback(err);
      callback(null, newEvent);
    });
  };

  this.edit = function(event, eventId, callback){
    var conn = fc.init(accessToken);
    conn.put('/businesses/'+businessId+'/events/' + eventId, event, function(err, newEvent) {
      if(err) return callback(err);
      callback(null, newEvent);
    });
  };

  this.delete = function(eventId, callback){
    var conn = fc.init(accessToken);
    conn.delete('/businesses/'+businessId+'/events/' + eventId, function(err, newEvent) {
      if(err) return callback(err);
      callback(null, newEvent);
    });
  };
};