const koa = require('koa');
const app = new koa();
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const router = new Router();
const cors = require('@koa/cors')

app.use(cors())

app.use(bodyParser());

//logger
app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Responce-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`)
})

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Responce-Time', `${ms}ms`)
})


  
  //routes
  router.get('/testapi', async (ctx) => {
    ctx.body = 
      [{
        "id":1,
        "name":"Tom",
        "age":24
    },
    {
        "id":2,
        "name":"Bob",
        "age":27
    },
    {
        "id":3,
        "name":"Alice",
        "age":"23"
    }]
    
  });


app.use(router.routes());
app.use(router.allowedMethods());


app.listen(3200);