module.exports = function(conn) {
  return {
    list: function(businessId, callback) {
      conn.get('/businesses/'+businessId+'/suppliers', callback);
    },

    delete: function(businessId, id, callback) {
      conn.delete('/businesses/'+businessId+'/suppliers/'+id, callback);
    },

    listInvitations: function(businessId, callback) {
      conn.get('/businesses/'+businessId+'/supplierInvitations', callback);
    },
  
    createInvitation: function(businessId, supplier, callback) {
      conn.post('/businesses/'+businessId+'/supplierInvitations', supplier, callback);
    },

    cancelInvitation: function(businessId, invitationId, callback) {
      conn.delete('/businesses/'+businessId+'/supplierInvitations/'+invitationId, callback);
    }
  };
};