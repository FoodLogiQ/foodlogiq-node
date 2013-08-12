var fc = require('./foodlogiq-connection');

function Users(accessToken) {this.accessToken = accessToken;}

Users.prototype.list = function(businessId, callback) {
  fc.init(this.accessToken).get('/users?businessId=' + businessId, callback);
};

module.exports = Users;
