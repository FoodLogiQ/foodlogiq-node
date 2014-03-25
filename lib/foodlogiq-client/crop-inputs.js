'use strict';

module.exports = function(conn) {
  return {
    list: function(businessId, purchaseOrderId, plantingId ,callback) {
      var q = [];
      if(purchaseOrderId) { q.push('purchaseOrderId='+purchaseOrderId); }
      if(plantingId) { q.push('plantingId='+plantingId); }
      var u = '/businesses/'+businessId+'/cropInputs';
      if(q.length > 0) {
        u += '?' + q.join('&');
      }
      conn.get(u, callback);
    },

    create: function(businessId, newInput, callback) {
      conn.post('/businesses/'+businessId+'/cropInputs', newInput, callback);
    },

    find: function(businessId, inputId, callback) {
      conn.get('/businesses/'+businessId+'/cropInputs/'+inputId, callback);
    },

    delete: function(businessId, inputId, callback){
      conn.delete('/businesses/'+businessId+'/cropInputs/'+inputId, callback);
    }
  };
};