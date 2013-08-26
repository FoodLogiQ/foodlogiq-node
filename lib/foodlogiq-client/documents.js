var http = require('http')
  , https = require('https')
  , url = require('url');

module.exports = function(apiBase) {
  var fc = require('./foodlogiq-connection');
  fc.setApiBase(apiBase);
  
  return function(accessToken, businessId) {
    console.log('intializing documents wrapper with ' + accessToken + ','+businessId);

    if(!businessId) {
      throw new Error('cannot initialize documents wrapper without a businessId');
    }

    this.list = function(callback) {
      var conn = fc.init(accessToken);
      conn.get('/businesses/'+businessId+'/documents', function(err, docs) {
        if(err) return callback(err);
        callback(null, docs);
      });
    };

    this.create = function(document, callback) {
      var conn = fc.init(accessToken);
      conn.post('/businesses/'+businessId+'/documents', document, function(err, newDocument) {
        if(err) return callback(err);
        callback(null, newDocument);
      });
    };

    this.edit = function(documentId, document, callback) {
      var conn = fc.init(accessToken);
      conn.put('/businesses/'+businessId+'/documents/'+documentId, document, function(err, edittedDoc) {
        if(err) return callback(err);
        callback(null, edittedDoc);
      });
    };

    this.find = function(documentId, callback) {
      var conn = fc.init(accessToken);
      conn.get('/businesses/'+businessId+'/documents/'+documentId, function(err, foundDoc) {
        if(err) return callback(err);
        callback(null, foundDoc);
      });
    };

    this.delete = function(id, callback){
      var conn = fc.init(accessToken);
      conn.delete('/businesses/'+businessId+'/documents/'+id, function(err) {
        if(err) return callback(err);
        callback(null, 200);
      });
    };
  };
};