module.exports = function(oauthClient, accessToken) {
  valueChainClient = {
    // create a new value chain
    create: function(params) {
      
    },
    
    // find the value chain for the corresponding id
    findAll: function(callback) {
      oauthClient.get(oauthClient._baseSite+'/api/value_chains', accessToken, function(err, body, oauthResponse) {
        if(err) { 
          console.error('Error connecting to FoodLogiQ service at ' + oauthClient._baseSite);
          callback(err);
        } else {
          callback(null, body);
        }
      });
    }
  }
  
  return valueChainClient;
};
