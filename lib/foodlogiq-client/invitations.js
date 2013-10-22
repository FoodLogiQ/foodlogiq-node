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
  
    consider: function(code, options, callback) {
      conn.put('/invitations/'+code+'/consider', options, callback);
    },

    accept: function(code, options, callback) {
      conn.put('/invitations/'+code+'/accept', options, callback);
    },
  
    decline: function(code, options, callback) {
      conn.put('/invitations/'+code+'/decline', options, callback);
    }
  };
};