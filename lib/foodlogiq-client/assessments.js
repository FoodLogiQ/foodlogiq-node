'use strict';

module.exports = function(conn) {
  return {
    list: function(businessId, callback) {
      conn.get('/businesses/'+businessId+'/assessments', callback);
    },

    create: function(businessId, product, callback) {
      conn.post('/businesses/'+businessId+'/assessments', product, callback);
    },
    
    update: function(businessId, productId, product, callback) {
      conn.put('/businesses/'+businessId+'/assessments/'+productId, product, callback);
    },

    find: function(businessId, productId, callback) {
      conn.get('/businesses/'+businessId+'/assessments/'+productId, callback);
    },

    delete: function(businessId, productId, callback){
      conn.delete('/businesses/'+businessId+'/assessments/'+productId, callback);
    }
  };
};