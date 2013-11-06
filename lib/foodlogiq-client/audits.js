module.exports = function(conn) {
  return {
    list: function(businessId, callback) {
      conn.get('/businesses/'+businessId+'/audits', callback);
    },

    create: function(businessId, audit, callback) {
      conn.post('/businesses/'+businessId+'/audits', audit, callback);
    },

    edit: function(businessId, auditId, audit, callback) {
      conn.put('/businesses/'+businessId+'/audits/'+auditId, audit, callback);
    },

    find: function(businessId, auditId, callback) {
      conn.get('/businesses/'+businessId+'/audits/'+auditId, callback);
    },

    delete: function(businessId, auditId, callback){
      conn.delete('/businesses/'+businessId+'/audits/'+auditId, callback);
    },

    addFailure: function(businessId, auditId, failure, callback) {
      conn.post(
        '/businesses/' + businessId + '/audits/' + auditId + '/failures',
        failure,
        callback
      );
    }, 

    listShared: function(businessId, callback) {
      conn.get('/businesses/' + businessId + '/audits/shared', callback);
    }, 

    share: function(customerId, shareData, callback){
      conn.post('/businesses/' + customerId + '/audits/shared', shareData, callback);
    }, 
    removeShare: function(customerId, shareData, callback){
      conn.delete('/businesses/'+customerId+'/audits/shared/', callback);
    }
  };
};
