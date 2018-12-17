const Router = require('koa-router');
const router = new Router();
const {testapi} = require('../controllers/notice')
const {formAuth} = require('../controllers/auth')
const bcrypt = require('bcrypt')

  //routes
  router.get('/testapi', testapi)

  router.post('/', formAuth)

  module.exports = router