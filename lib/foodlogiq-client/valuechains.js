module.exports = function(oauthClient, accessToken) {
  valueChainClient = {
    // create a new value chain
    create: function(params, callback) {
      oauthClient._request("POST", oauthClient._baseSite+'/api/value_chains', {}, params, accessToken, callback);
    },
    
    // find the value chain for the corresponding id
    findAll: function(callback) {
      oauthClient.get(oauthClient._baseSite+'/api/value_chains', accessToken, callback);
    }
  }
  
  return valueChainClient;
};
