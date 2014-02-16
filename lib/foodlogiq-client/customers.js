'use strict';

module.exports = function(conn) {
  return {
    list: function(businessId, callback) {
      conn.get('/businesses/'+businessId+'/customers', callback);
    },
  
    delete: function(businessId, id, callback) {
      conn.delete('/businesses/'+businessId+'/customers/'+id, callback);
    },
  
    listInvitations: function(businessId, callback) {
      conn.get('/businesses/'+businessId+'/customerInvitations', callback);
    },

    createInvitation: function(businessId, invitation, callback) {
      conn.post('/businesses/'+businessId+'/customerInvitations', invitation, callback);
    },
  
    cancelInvitation: function(businessId, invitationId, callback) {
      conn.delete('/businesses/'+businessId+'/customerInvitations/'+invitationId, callback);
    }
  };
};