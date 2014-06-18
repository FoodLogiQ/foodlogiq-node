'use strict';

var winston = require('winston');

module.exports = function(conn) {
  return {
    list: function(businessId, callback) {
      conn.get('/businesses/'+businessId+'/contacts', callback);
    },

    create: function(businessId, contact, callback) {
      conn.post('/businesses/'+businessId+'/contacts', contact, callback);
    },

    edit: function(businessId, contactId, contact, callback) {
      winston.warn('edit method is deprecated');      
      conn.put('/businesses/'+businessId+'/contacts/'+contactId, contact, callback);
    },

    update: function(businessId, contactId, contact, callback) {
      conn.put('/businesses/'+businessId+'/contacts/'+contactId, contact, callback);
    },

    find: function(businessId, contactId, callback) {
      conn.get('/businesses/'+businessId+'/contacts/'+contactId, callback);
    },

    delete: function(businessId, contactId, callback){
      conn.delete('/businesses/'+businessId+'/contacts/'+contactId, callback);
    }
  };
};
