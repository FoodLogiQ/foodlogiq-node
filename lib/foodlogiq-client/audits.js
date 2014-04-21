'use strict';

var fs = require('fs')
  , winston = require('winston');

module.exports = function(conn) {
  return {
    list: function(businessId, callback) {
      conn.get('/businesses/'+businessId+'/audits', callback);
    },

    create: function(businessId, audit, callback) {
      conn.post('/businesses/'+businessId+'/audits', audit, callback);
    },

    edit: function(businessId, auditId, audit, callback) {
      winston.warn('edit method is deprecated');
      conn.put('/businesses/'+businessId+'/audits/'+auditId, audit, callback);
    },

    update: function(businessId, auditId, audit, callback) {
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
      var readStream = fs.createReadStream(file.path);
      var url = '/businesses/' + businessId + '/audits/' + auditId + '/documents';
      var parts = {
        docType: docType,
        document: readStream,
        filename: file.name
      };
      conn.postMultipart(url, parts, callback);
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
    
    deleteFailure: function(businessId, auditId, failureId, callback) {
      conn.delete(
        '/businesses/' +
          businessId +
          '/audits/' +
          auditId +
          '/failures/' +
          failureId,
        callback
      );
    }
  };
};
