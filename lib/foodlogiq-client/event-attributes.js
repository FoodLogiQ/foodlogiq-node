'use strict';

var winston = require('winston');

module.exports = function(conn) {
  return {
    list: function(businessId, callback) {
      conn.get('/businesses/'+businessId+'/event-attributes', callback);
    },

    create: function(businessId, attribute, callback) {
      conn.post('/businesses/'+businessId+'/event-attributes', attribute, callback);
    },

    update: function(businessId, attributeId, attribute, callback) {
      conn.put('/businesses/'+businessId+'/event-attributes/'+attributeId, attribute, callback);
    },

    find: function(businessId, attributeId, callback) {
      conn.get('/businesses/'+businessId+'/event-attributes/'+attributeId, callback);
    },

    delete: function(businessId, attributeId, callback){
      conn.delete('/businesses/'+businessId+'/event-attributes/'+attributeId, callback);
    }
  };
};
