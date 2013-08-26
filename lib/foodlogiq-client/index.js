module.exports = function(apiBase) {
  return {
    businesses: require('./businesses')(apiBase),
    customers: require('./customers')(apiBase),
    products: require('./products')(apiBase),
    suppliers: require('./suppliers')(apiBase),
    locations: require('./locations')(apiBase),
    events: require('./events')(apiBase),
    documents: require('./documents')(apiBase),
    customAttributes: require('./custom-attributes')(apiBase),
    users: require('./users')(apiBase)
  }
}

