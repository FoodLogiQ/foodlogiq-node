var fs = require('fs');

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

    addDocument: function(businessId, auditId, docType, file, callback) {
      conn.postMultipart(
        '/businesses/' + businessId + '/audits/' + auditId + '/documents',
        {
          docType: docType,
          document: fs.createReadStream(file.path),
          filename: file.name
        },
        callback
      );
    },

    deleteDocument: function(businessId, auditId, docId, callback) {
      conn.delete(
        '/businesses/' +
          businessId +
          '/audits/' +
          auditId +
          '/documents/' +
          docId,
        callback
      );
    }, 

    listShared: function(businessId, callback) {
      conn.get('/businesses/' + businessId + '/audits/shared', callback);
    }, 

    share: function(customerId, auditId, businessId, callback){
      var obj = { "sharedEntity" : "audits", 
	               "auditId" : auditId,
          "sharedWithBusinessId" : customerId,
        	"allowResharing" : false, 
                     "canModify" : false, 
                     "canDelete" : false }
          ;

      conn.post('/businesses/' + businessId + '/permissions', obj, callback );
    },

    removeShare: function(customerId, auditId, businessId, callback){
      conn.delete('/businesses/'+customerId+'/audits/' + auditId + '/shares/' + businessId, callback);
    }
  };
};
