'use strict';

module.exports = function(conn) {
  return {
    addMembership: function(businessId, communityId, callback) {
      conn.put('/businesses/'+businessId+'/communityMemberships/'+communityId, {}, callback);
    },
    removeMembership: function(businessId, communityId, callback) {
      conn.delete('/businesses/'+businessId+'/communityMemberships/'+communityId, callback);
    }
  };
};