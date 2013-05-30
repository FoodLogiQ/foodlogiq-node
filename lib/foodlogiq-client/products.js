var http = require('http')
  , https = require('https')
  , url = require('url')
  , fc = require('./foodlogiq-connection');
  
module.exports = function(accessToken, businessId) {
  console.log('intializing products wrapper with ' + accessToken + ','+businessId);
  
  if(!businessId) { 
    throw new Error('cannot initialize products wrapper without a businessId');
  }
  
  this.list = function(callback) {    
    var conn = fc.init(accessToken);
    conn.get('/businesses/'+businessId+'/products', function(err, prods) {
      if(err) return callback(err);
      callback(null, prods);
    });
  };
  
  this.create = function(product, callback) {
    var conn = fc.init(accessToken);
    conn.post('/businesses/'+businessId+'/products', product, function(err, newProduct) {
      if(err) return callback(err);
      callback(null, newProduct);
    });
  };
};