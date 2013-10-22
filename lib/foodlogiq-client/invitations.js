module.exports = function(conn) {
  return {
    list: function(businessId, callback) {
      conn.get('/invitations', callback);
    },
  
    get: function(businessId, code, callback) {
      conn.get('/invitations/'+code, callback);
    },
  
    consider: function(businessId, code, callback) {
      conn.put('/invitations/'+code+'/consider', callback);
    },

    accept: function(businessId, code, callback) {
      conn.put('/invitations/'+code+'/accept', callback);
    },
  
    decline: function(businessId, code, callback) {
      conn.put('/invitations/'+code+'/decline', callback);
    }
  };
};