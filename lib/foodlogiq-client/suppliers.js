var http = require('http')
  , https = require('https')
  , url = require('url')
  , fc = require('./foodlogiq-connection');

module.exports = function(accessToken, businessId) {
  console.log('intializing suppliers wrapper with ' + accessToken + ','+businessId);

  if(!businessId) {
    throw new Error('cannot initialize suppliers wrapper without a businessId');
  }

  this.list = function(callback) {
    var conn = fc.init(accessToken);
    conn.get('/businesses/'+businessId+'/suppliers', function(err, sups) {
      if(err) return callback(err);
      callback(null, sups);
    });
  };

  this.delete = function(id, callback){
    var conn = fc.init(accessToken);
    conn.delete('/businesses/'+businessId+'/suppliers/'+id, function(err) {
      if(err) return callback(err);
      callback(null, 200);
    });
  };


  this.listInvitations = function(callback) {
    var conn = fc.init(accessToken);
    conn.get('/businesses/'+businessId+'/supplierInvitations', function(err, supinvs) {
      if(err) return callback(err);
      callback(null, supinvs);
    });
  };
  
  this.createInvitation = function(supplier, callback) {
    var conn = fc.init(accessToken);
    conn.post('/businesses/'+businessId+'/supplierInvitations', supplier, function(err, newSupplier) {
      if(err) return callback(err);
      callback(null, newSupplier);
    });
  };

  this.cancelInvitation = function(id, callback) {
    var conn = fc.init(accessToken);
    conn.delete('/businesses/'+businessId+'/supplierInvitations/'+id, function(err) {
      if(err) return callback(err);
      callback(null, 200);
    });
  };
};
