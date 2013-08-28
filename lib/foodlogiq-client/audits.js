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
    }
  };
};