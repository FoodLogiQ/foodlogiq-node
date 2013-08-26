var http = require('http')
  , https = require('https')
  , url = require('url');

module.exports = function(apiBase) {
  var fc = require('./foodlogiq-connection');
  fc.setApiBase(apiBase);
  
  return function(accessToken, businessId) {
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

    this.edit = function(productId, product, callback) {
      var conn = fc.init(accessToken);
      conn.put('/businesses/'+businessId+'/products/'+productId, product, function(err, edittedLoc) {
        if(err) return callback(err);
        callback(null, edittedLoc);
      });
    };

    this.find = function(productId, callback) {
      var conn = fc.init(accessToken);
      conn.get('/businesses/'+businessId+'/products/'+productId, function(err, foundProd) {
        if(err) return callback(err);
        callback(null, foundProd);
      });
    };

    this.delete = function(id, callback){
      var conn = fc.init(accessToken);
      conn.delete('/businesses/'+businessId+'/products/'+id, function(err) {
        if(err) return callback(err);
        callback(null, 200);
      });
    };
  };
};