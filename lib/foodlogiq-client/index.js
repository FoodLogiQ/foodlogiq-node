var OAuth2 = require('oauth').OAuth2;

var getClient = exports.getClient = function(clientId, clientSecret, baseUrl, accessToken) {
  var oauthClient = new OAuth2(clientId, clientSecret, baseUrl);
  
  var foodlogiqClient = {
    accessToken: accessToken,
    oauthClient: oauthClient,
    ValueChains: require('./valuechains')(oauthClient, accessToken)
  };
  
  return foodlogiqClient;
};

exports.connectMiddleware = function(clientId, clientSecret, baseUrl, accessToken) {
  return 
};