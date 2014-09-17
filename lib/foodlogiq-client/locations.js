'use strict';

var winston = require('winston');

module.exports = function(conn) {
  return {
    list: function(businessId, opts, callback) {
      var url = '/businesses/'+businessId+'/locations';
      if('function' === typeof opts) {
        callback = opts;
      } else {
        if(opts.fields) {
          url += '?p='+opts.fields.join(',');
        }
      }
      conn.get(url, callback);
    },

    create: function(businessId, location, callback) {
      conn.post('/businesses/'+businessId+'/locations', location, callback);
    },

    find: function(businessId, locationId, callback) {
      conn.get('/businesses/'+businessId+'/locations/'+locationId, callback);
    },

    edit: function(businessId, locationId, location, callback) {
      winston.warn('edit method is deprecated');
      conn.put('/businesses/'+businessId+'/locations/'+locationId, location, callback);
    },

    update: function(businessId, locationId, location, callback) {
      conn.put('/businesses/'+businessId+'/locations/'+locationId, location, callback);
    },

    delete: function(businessId, locationId, callback){
      conn.delete('/businesses/'+businessId+'/locations/'+locationId, callback);
    }
  };
};
