'use strict';

module.exports = function(conn) {
  return {
    list: function(businessId, callback) {
      conn.get('/businesses/'+businessId+'/pickCrews', callback);
    },

    create: function(businessId, pickCrew, callback) {
      conn.post('/businesses/'+businessId+'/pickCrews', pickCrew, callback);
    },

    update: function(businessId, crewId, pickCrew, callback) {
      conn.put('/businesses/'+businessId+'/pickCrews/'+crewId, pickCrew, callback);
    },

    find: function(businessId, crewId, callback) {
      conn.get('/businesses/'+businessId+'/pickCrews/'+crewId, callback);
    },

    delete: function(businessId, crewId, callback){
      conn.delete('/businesses/'+businessId+'/pickCrews/'+crewId, callback);
    }
  };
};