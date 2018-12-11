const Router = require('koa-router');
const router = new Router();
const {testapi} = require('../controllers/notice')

  //routes
  router.get('/testapi', testapi)

  router.post('/', async ctx => {
      console.log(ctx.request.body)
      ctx.status = 200
  })

  module.exports = router