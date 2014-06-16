'use strict';

var winston = require('winston');

module.exports = function(conn) {
  return {
    list: function(businessId, callback) {
      conn.get('/businesses/'+businessId+'/qualityIncidents', callback);
    },

    create: function(businessId, qualityIncident, callback) {
      conn.post('/businesses/'+businessId+'/qualityIncidents', qualityIncident, callback);
    },

    edit: function(businessId, qualityIncidentId, qualityIncident, callback) {
      winston.warn('edit method is deprecated');      
      conn.put('/businesses/'+businessId+'/qualityIncidents/'+qualityIncidentId, qualityIncident, callback);
    },

    update: function(businessId, qualityIncidentId, qualityIncident, callback) {
      conn.put('/businesses/'+businessId+'/qualityIncidents/'+qualityIncidentId, qualityIncident, callback);
    },

    find: function(businessId, qualityIncidentId, callback) {
      conn.get('/businesses/'+businessId+'/qualityIncidents/'+qualityIncidentId, callback);
    },

    delete: function(businessId, qualityIncidentId, callback){
      conn.delete('/businesses/'+businessId+'/qualityIncidents/'+qualityIncidentId, callback);
    }
  };
};
