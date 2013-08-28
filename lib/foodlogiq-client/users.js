module.exports = function(conn) {
  return {
    list: function(businessId, callback) {
      conn.get('/users?businessId=' + businessId, callback);
    }
  }
};
