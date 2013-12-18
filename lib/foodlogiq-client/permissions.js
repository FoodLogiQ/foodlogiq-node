module.exports = function(conn) {
  return {
    list: function(businessId, callback) {
      conn.get('/businesses/'+businessId+'/permissions', callback);
    },

    create: function(businessId, permission, callback) {
      conn.post('/businesses/'+businessId+'/permissions', permission, callback);
    },

    find: function(businessId, permissionId, callback) {
      conn.get('/businesses/'+businessId+'/permissions/'+permissionId, callback);
    },

    delete: function(businessId, permissionId, callback){
      conn.delete('/businesses/'+businessId+'/permissions/'+permissionId, callback);
    }
  };
};