module.exports = function(conn) {
  return {
    show: function(callback) {conn.get('/user', callback);},
    list: function(businessId, callback) {
      conn.get('/users?businessId=' + businessId, callback);
    }
  }
};
