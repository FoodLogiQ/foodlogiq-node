exports.createClient = function(apiBase, accessToken) {
  var fc = require('./foodlogiq-connection');
  fc.setApiBase(apiBase);
  var conn = fc.init(accessToken);
  
  return {
    businesses: require('./businesses')(conn),
    managers: require('./managers')(conn),
    invitations: require('./invitations')(conn),
    customers: require('./customers')(conn),
    products: require('./products')(conn),
    suppliers: require('./suppliers')(conn),
    locations: require('./locations')(conn),
    audits: require('./audits')(conn),
    events: require('./events')(conn),
    documents: require('./documents')(conn),
    customAttributes: require('./custom-attributes')(conn),
    users: require('./users')(conn)
  }
  
};

