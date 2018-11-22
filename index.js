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
    ctx.body = await {
      a: [1,2,3,4],
      b: 2,
      c: 3
    }
  });


app.use(router.routes());
app.use(router.allowedMethods());


app.listen(3000);