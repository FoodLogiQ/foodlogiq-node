module.exports = function(conn) {
  return {
    list: function(businessId, callback) {
      var bidstr = '';
      if(businessId) { bidstr = '?businessId='+businessId; }
      conn.get('/invitations'+bidstr, callback);
    },
  
    get: function(code, callback) {
      conn.get('/invitations/'+code, callback);
    },
  
    consider: function(code, callback) {
      conn.put('/invitations/'+code+'/consider', callback);
    },

    accept: function(code, callback) {
      conn.put('/invitations/'+code+'/accept', callback);
    },
  
    decline: function(code, callback) {
      conn.put('/invitations/'+code+'/decline', callback);
    }
  };
};