const koa = require('koa');
const app = new koa();
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const router = new Router();
const serve = require('koa-static')

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

//static folder 
app.use(serve(__dirname + '/app'));

  
  //routes
  router.get('/', async (ctx) => {
    await ctx.render('index');
  });


app.use(router.routes());
app.use(router.allowedMethods());


app.listen(3000);