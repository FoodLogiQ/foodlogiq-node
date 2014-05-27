'use strict';
var fc = require('./foodlogiq-connection');
  
exports.createClient = function(apiBase, accessToken) {

  var conn = fc.init(apiBase, accessToken);

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
    users: require('./users')(conn),
    assessments: require('./assessments')(conn),
    purchaseOrders: require('./purchase-orders')(conn),
    permissions: require('./permissions')(conn),
    tagRanges: require('./tag-ranges')(conn),
    pickCrews: require('./pick-crews')(conn),
    cropInputs: require('./crop-inputs')(conn),
    plantings: require('./plantings')(conn)
  }
};

