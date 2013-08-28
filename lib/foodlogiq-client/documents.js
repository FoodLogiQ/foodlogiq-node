module.exports = function(conn) {
  return {
    list: function(callback) {
      conn.get('/businesses/'+businessId+'/documents', callback);
    },

    create: function(document, callback) {
      conn.post('/businesses/'+businessId+'/documents', document, callback);
    },

    edit: function(documentId, document, callback) {
      conn.put('/businesses/'+businessId+'/documents/'+documentId, document, callback);
    },

    find: function(documentId, callback) {
      conn.get('/businesses/'+businessId+'/documents/'+documentId, callback);
    },

    delete: function(documentId, callback){
      conn.delete('/businesses/'+businessId+'/documents/'+documentId, callback);
    }
  };
};