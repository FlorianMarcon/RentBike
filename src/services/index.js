const dealership = require('./dealership/dealership.service.js');
const users = require('./users/users.service.js');
const bike = require('./bike/bike.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(dealership);
  app.configure(users);
  app.configure(bike);
};
