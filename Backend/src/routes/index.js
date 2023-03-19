
const express = require('express');
const personBillRouter = require('./user_schema.router');
function routerApi(app) {
  const router = express.Router();
  /*Endpoint estático http://localhost:5000/api/v1 */
  app.use('/api/v1', router);

  /*Endpoint estático http://localhost:5000/api/v1 */
  router.use('/user', user_schema);

}
module.exports = routerApi;