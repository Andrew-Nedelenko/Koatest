const Router = require('koa-router');
const router = new Router();
const {testapi} = require('../controllers/notice')
const {sequelize, User} = require('../models/Users')

  //routes
  router.get('/testapi', testapi)

  router.post('/', async ctx => {
      console.log(ctx.request.body)
      if(ctx.request.body != ''){
        sequelize.sync().then(() => {
            User.create({
                username: ctx.request.body.username,
                email: ctx.request.body.email,
                password: ctx.request.body.password,
                date: Date.now()
            }).then( n =>{
                console.log(n.toJSON())
            })
        })
      }
  })

  module.exports = router