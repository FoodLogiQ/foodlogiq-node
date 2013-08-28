module.exports = function(conn) {
  return  {
    create: function(newBiz, callback) {
      conn.post('/businesses', newBiz, callback);
    },

    list: function(callback) {
      conn.get('/businesses', callback);
    },

    find: function(businessId, callback) {
      conn.get('/businesses/'+businessId, callback);
    },

    edit: function(businessId, business, callback) {
      conn.put('/businesses/'+businessId, business, callback);
    }
  }
};
