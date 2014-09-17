'use strict';

var winston = require('winston');

module.exports = function(conn) {
  return {
    list: function(businessId, opts, callback) {
      var url = '/businesses/'+businessId+'/products';
      if('function' === typeof opts) {
        callback = opts;
      } else {
        if(opts.fields) {
          url += '?p='+opts.fields.join(',');
        }
      }
      conn.get(url, callback);
    },

    create: function(businessId, product, callback) {
      conn.post('/businesses/'+businessId+'/products', product, callback);
    },

    edit: function(businessId, productId, product, callback) {
      winston.warn('edit method is deprecated');      
      conn.put('/businesses/'+businessId+'/products/'+productId, product, callback);
    },

    update: function(businessId, productId, product, callback) {
      conn.put('/businesses/'+businessId+'/products/'+productId, product, callback);
    },

    find: function(businessId, productId, callback) {
      conn.get('/businesses/'+businessId+'/products/'+productId, callback);
    },

    delete: function(businessId, productId, callback){
      conn.delete('/businesses/'+businessId+'/products/'+productId, callback);
    }
  };
};
