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

  this.create = function(customer, callback) {
    var conn = fc.init(accessToken);
    conn.post('/businesses/'+businessId+'/customers', customer, function(err, newCustomer) {
      if(err) return callback(err);
      callback(null, newCustomer);
    });
  };

  /* TODO
  this.delete = function(id, callback){
    var conn = fc.init(accessToken);
    conn.delete('/businesses/'+businessId+'/customers/'+id, function(err) {
      if(err) return callback(err);
      callback(null, 200);
    });
  };*/
};
