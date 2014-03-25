'use strict';

module.exports = function(conn) {
  return {
    listOwned: function(businessId, callback) {
      conn.get('/businesses/'+businessId+'/purchaseOrders?scope=owned', callback);
    },
    
    listReceived: function(businessId, callback) {
      conn.get('/businesses/'+businessId+'/purchaseOrders?scope=received', callback);
    },
    
    listAll: function(businessId, callback) {
      conn.get('/businesses/'+businessId+'/purchaseOrders?scope=all', callback);
    },
    
    list: function(businessId, callback) {
      conn.get('/businesses/'+businessId+'/purchaseOrders?scope=owned', callback);
    },

    create: function(businessId, product, callback) {
      conn.post('/businesses/'+businessId+'/purchaseOrders', product, callback);
    },

    update: function(businessId, productId, product, callback) {
      conn.put('/businesses/'+businessId+'/purchaseOrders/'+productId, product, callback);
    },

    find: function(businessId, productId, callback) {
      conn.get('/businesses/'+businessId+'/purchaseOrders/'+productId, callback);
    },

    delete: function(businessId, productId, callback){
      conn.delete('/businesses/'+businessId+'/purchaseOrders/'+productId, callback);
    }
  };
};