module.exports = function(conn) {
  return {
    list: function(businessId, callback) {
      conn.get('/businesses/'+businessId+'/invitations', callback);
    },
  
    get: function(businessId, code, callback) {
      conn.get('/businesses/'+businessId+'/invitations/'+code, callback);
    },
  
    consider: function(businessId, code, callback) {
      conn.put('/businesses/'+businessId+'/invitations/'+code+'/consider', callback);
    },

    accept: function(businessId, code, callback) {
      conn.put('/businesses/'+businessId+'/invitations/'+code+'/accept', callback);
    },
  
    decline: function(businessId, code, callback) {
      conn.put('/businesses/'+businessId+'/invitations/'+code+'/decline', callback);
    }
  };
};