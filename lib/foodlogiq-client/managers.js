module.exports = function(conn) {
  return {
    list: function(businessId, callback) {
      conn.get('/businesses/'+businessId+'/managers', callback);
    },
  
    delete: function(businessId, id, callback) {
      conn.delete('/businesses/'+businessId+'/managers/'+id, callback);
    },
  
    listInvitations: function(businessId, callback) {
      conn.get('/businesses/'+businessId+'/managerInvitations', callback);
    },

    createInvitation: function(businessId, invitation, callback) {
      conn.post('/businesses/'+businessId+'/managerInvitations', invitation, callback);
    },
  
    cancelInvitation: function(businessId, invitationId, callback) {
      conn.delete('/businesses/'+businessId+'/managerInvitations/'+invitationId, callback);
    }
  };
};