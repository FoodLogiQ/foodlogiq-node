'use strict';

module.exports = function(conn) {
  return {
    list: function(businessId, callback) {
      conn.get('/businesses/'+businessId+'/plantings', callback);
    },

    create: function(businessId, planting, callback) {
      conn.post('/businesses/'+businessId+'/plantings', planting, callback);
    },

    update: function(businessId, plantingId, planting, callback) {
      conn.post('/businesses/'+businessId+'/plantings/'+plantingId, planting, callback);
    },

    find: function(businessId, plantingId, callback) {
      conn.get('/businesses/'+businessId+'/plantings/'+plantingId, callback);
    },

    delete: function(businessId, plantingId, callback){
      conn.delete('/businesses/'+businessId+'/plantings/'+plantingId, callback);
    }
  };
};