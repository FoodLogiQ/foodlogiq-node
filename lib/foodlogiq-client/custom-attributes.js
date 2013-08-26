var http = require('http')
  , https = require('https')
  , url = require('url');

module.exports = function(apiBase) {
  var fc = require('./foodlogiq-connection');
  fc.setApiBase(apiBase);
  
  return function(accessToken, businessId, partnerKey) {
    console.log('intializing custom attributes wrapper with ' + accessToken + ','+businessId+','+partnerKey);

    if(!businessId) {
      throw new Error('cannot initialize custom attributes wrapper without a businessId');
    }

    this.list = function(attributeName, callback) {
      var conn = fc.init(accessToken);
      conn.get('/businesses/'+businessId+'/partners/'+partnerKey+'/'+attributeName, function(err, values) {
        if(err) return callback(err);
        callback(null, values);
      });
    };

    this.create = function(attributeName, attributeValue, callback) {
      var conn = fc.init(accessToken);
      conn.post('/businesses/'+businessId+'/partners/'+partnerKey+'/'+attributeName, attributeValue, function(err, newValue) {
        if(err) return callback(err);
        callback(null, newValue);
      });
    };

    this.set = function(attributeName, attributeValue, callback) {
      var conn = fc.init(accessToken);
      conn.put('/businesses/'+businessId+'/partners/'+partnerKey+'/'+attributeName, attributeValue, function(err, newValue) {
        if(err) return callback(err);
        callback(null, newValue);
      });
    };

    this.delete = function(attributeName, callback){
      var conn = fc.init(accessToken);
      conn.delete('/businesses/'+businessId+'/partners/'+partnerKey+'/'+attributeName, function(err) {
        if(err) return callback(err);
        callback(null, 200);
      });
    };
  };
};