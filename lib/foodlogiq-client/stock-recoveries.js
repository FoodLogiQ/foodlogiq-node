'use strict';

var winston = require('winston');

module.exports = function(conn) {
  return {
    list: function(businessId, callback) {
      conn.get('/businesses/'+businessId+'/stockRecoveries', callback);
    },

    create: function(businessId, stockRecovery, callback) {
      conn.post('/businesses/'+businessId+'/stockRecoveries', stockRecovery, callback);
    },

    edit: function(businessId, stockRecoveryId, stockRecovery, callback) {
      winston.warn('edit method is deprecated');      
      conn.put('/businesses/'+businessId+'/stockRecoveries/'+stockRecoveryId, stockRecovery, callback);
    },

    update: function(businessId, stockRecoveryId, stockRecovery, callback) {
      conn.put('/businesses/'+businessId+'/stockRecoveries/'+stockRecoveryId, stockRecovery, callback);
    },

    find: function(businessId, stockRecoveryId, callback) {
      conn.get('/businesses/'+businessId+'/stockRecoveries/'+stockRecoveryId, callback);
    },

    delete: function(businessId, stockRecoveryId, callback){
      conn.delete('/businesses/'+businessId+'/stockRecoveries/'+stockRecoveryId, callback);
    }
  };
};
