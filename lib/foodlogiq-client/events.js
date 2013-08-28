module.exports = function(conn) {
  return {
    get: function(businessId, eventId, callback) {
      conn.get('/businesses/'+businessId+'/events/' + eventId, callback);
    },
  
    list: function(businessId, callback) {    
      conn.get('/businesses/'+businessId+'/events', callback);
    },

    listByType: function(businessId, type, callback) {
      conn.get('/businesses/'+businessId+'/events/' + '?type=' + type, callback);
    },
  
    create: function(businessId, event, callback) {
      conn.post('/businesses/'+businessId+'/events', event, callback);
    },

    edit: function(businessId, event, eventId, callback) {
      conn.put('/businesses/'+businessId+'/events/' + eventId, event, callback);
    },

    delete: function(businessId, eventId, callback) {
      conn.delete('/businesses/'+businessId+'/events/' + eventId, callback);
    }
  };
};