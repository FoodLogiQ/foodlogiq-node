'use strict';

var fs = require('fs')
  , winston = require('winston');

module.exports = function(conn) {
  return {
    list: function(businessId, callback) {
      conn.get('/businesses/'+businessId+'/stockRecoveries', callback);
    },

    listArchived: function(businessId, callback) {
      conn.get('/businesses/'+businessId+'/stockRecoveries/archived', callback);
    },

    create: function(businessId, stockRecovery, callback) {
      conn.post('/businesses/'+businessId+'/stockRecoveries', stockRecovery, callback);
    },

    edit: function(businessId, stockRecoveryId, stockRecovery, callback) {
      winston.warn('edit method is deprecated');      
      conn.put('/businesses/'+businessId+'/stockRecoveries/'+stockRecoveryId, stockRecovery, callback);
    },

    update: function(businessId, stockRecoveryId, stockRecovery, callback) {
      conn.put('/businesses/'+businessId+'/stockRecoveries/'+stockRecoveryId, stockRecovery, callback);
    },

    find: function(businessId, stockRecoveryId, callback) {
      conn.get('/businesses/'+businessId+'/stockRecoveries/'+stockRecoveryId, callback);
    },

    archive: function(businessId, stockRecoveryId, body, callback){
      conn.put('/businesses/'+businessId+'/stockRecoveries/'+stockRecoveryId+'/archive', body, callback);
    },
    
    delete: function(businessId, stockRecoveryId, callback){
      conn.delete('/businesses/'+businessId+'/stockRecoveries/'+stockRecoveryId, callback);
    },

    addDocument: function(businessId, stockRecoveryId, file, callback) {
      var readStream = fs.createReadStream(file.path);
      var url = '/businesses/' + businessId + '/stockRecoveries/' + stockRecoveryId + '/documents';
      var parts = {
        document: readStream,
        filename: file.name
      };
      conn.postMultipart(url, parts, function(err, res) {
        console.log('after postMultipart');
        if(err) return callback(err);
        callback(null, res);
      });
    },

    deleteDocument: function(businessId, stockRecoveryId, docId, callback) {
      conn.delete(
        '/businesses/' +
          businessId +
          '/stockRecoveries/' +
          stockRecoveryId +
          '/documents/' +
          docId,
        callback
      );
    },
    
    addComment: function(businessId, stockRecoveryId, locationId, comment, callback){
      conn.put('/businesses/'+businessId+'/stockRecoveries/'+stockRecoveryId+'/addComment/'+locationId, comment, callback);
    },

    updateViewed: function(businessId, stockRecoveryId, locationId, viewed, callback){
      conn.put('/businesses/'+businessId+'/stockRecoveries/'+stockRecoveryId+'/updateViewed/'+locationId, viewed, callback);
    },
    
    addUserIdToComments: function(businessId, stockRecoveryId, locationId, data, callback){
      conn.put('/businesses/'+businessId+'/stockRecoveries/'+stockRecoveryId+'/addUserIdToComments/'+locationId, data, callback);
    }
  };
};
