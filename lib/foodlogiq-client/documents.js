var winston = require('winston');

module.exports = function(conn) {
  return {
    list: function(businessId, callback) {
      conn.get('/businesses/'+businessId+'/documents', callback);
    },

    create: function(businessId, document, callback) {
      conn.post('/businesses/'+businessId+'/documents', document, callback);
    },

    edit: function(businessId, documentId, document, callback) {
      winston.warn('edit method is deprecated');
      conn.put('/businesses/'+businessId+'/documents/'+documentId, document, callback);
    },

    update: function(businessId, documentId, document, callback) {
      conn.put('/businesses/'+businessId+'/documents/'+documentId, document, callback);
    },

    find: function(businessId, documentId, callback) {
      conn.get('/businesses/'+businessId+'/documents/'+documentId, callback);
    },

    delete: function(businessId, documentId, callback){
      conn.delete('/businesses/'+businessId+'/documents/'+documentId, callback);
    }
  };
};
