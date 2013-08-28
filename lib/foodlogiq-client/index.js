exports.createClient = function(apiBase, accessToken) {
  var fc = require('./foodlogiq-connection');
  fc.setApiBase(apiBase);
  var conn = fc.init(accessToken);
  
  return {
    businesses: require('./businesses')(conn),
    customers: require('./customers')(conn),
    products: require('./products')(conn),
    suppliers: require('./suppliers')(conn),
    locations: require('./locations')(conn),
    events: require('./events')(conn),
    documents: require('./documents')(conn),
    customAttributes: require('./custom-attributes')(conn),
    users: require('./users')(conn)
  }
  
};

