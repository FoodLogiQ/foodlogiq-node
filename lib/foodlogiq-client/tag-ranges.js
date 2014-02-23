'use strict';

module.exports = function(conn) {
  return {
    list: function(businessId, callback) {
      conn.get('/businesses/'+businessId+'/tagRanges', callback);
    },

    create: function(businessId, tagRange, callback) {
      console.log(businessId, tagRange);
      conn.post('/businesses/'+businessId+'/tagRanges', tagRange, callback);
    },

    update: function(businessId, tagId, tagRange, callback) {
      conn.put('/businesses/'+businessId+'/tagRanges/'+tagId, tagRange, callback);
    },

    find: function(businessId, tagId, callback) {
      conn.get('/businesses/'+businessId+'/tagRanges/'+tagId, callback);
    },

    delete: function(businessId, tagId, callback){
      conn.delete('/businesses/'+businessId+'/tagRanges/'+tagId, callback);
    }
  };
};