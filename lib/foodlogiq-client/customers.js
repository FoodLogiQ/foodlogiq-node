var http = require('http')
  , https = require('https')
  , url = require('url')
  , fc = require('./foodlogiq-connection');

module.exports = function(accessToken, businessId) {
  console.log('intializing customers wrapper with ' + accessToken + ','+businessId);

  if(!businessId) {
    throw new Error('cannot initialize customers wrapper without a businessId');
  }

  this.list = function(callback) {
    var conn = fc.init(accessToken);
    conn.get('/businesses/'+businessId+'/customers', function(err, customers) {
      if(err) return callback(err);
      callback(null, customers);
    });
  };
  
  this.delete = function(id, callback){
    var conn = fc.init(accessToken);
    conn.delete('/businesses/'+businessId+'/customers/'+id, function(err) {
      if(err) return callback(err);
      callback(null, 200);
    });
  };
  
  this.listInvitations = function(callback) {
    var conn = fc.init(accessToken);
    conn.get('/businesses/'+businessId+'/customerInvitations', function(err, custinvs) {
      if(err) return callback(err);
      callback(null, custinvs);
    });
  };

  this.createInvitation = function(invitation, callback) {
    var conn = fc.init(accessToken);
    conn.post('/businesses/'+businessId+'/customerInvitations', invitation, function(err, newCustomer) {
      if(err) return callback(err);
      callback(null, newCustomer);
    });
  };
  
  this.cancelInvitation = function(id, callback){
    var conn = fc.init(accessToken);
    conn.delete('/businesses/'+businessId+'/customerInvitations/'+id, function(err) {
      if(err) return callback(err);
      callback(null, 200);
    });
  };

};
