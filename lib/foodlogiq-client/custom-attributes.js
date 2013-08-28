module.exports = function(conn) {
  return {
    list: function(businessId, partnerKey, attributeName, callback) {
      conn.get('/businesses/'+businessId+'/partners/'+partnerKey+'/'+attributeName, callback);
    },

    create: function(businessId, partnerKey, attributeName, attributeValue, callback) {
      conn.post('/businesses/'+businessId+'/partners/'+partnerKey+'/'+attributeName, attributeValue, callback);
    },

    set: function(businessId, partnerKey, attributeName, attributeValue, callback) {
      conn.put('/businesses/'+businessId+'/partners/'+partnerKey+'/'+attributeName, attributeValue, callback);
    },

    delete: function(businessId, partnerKey, attributeName, callback) {
      conn.delete('/businesses/'+businessId+'/partners/'+partnerKey+'/'+attributeName, callback);
    },
  };
};