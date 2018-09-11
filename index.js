const http = require('http');
const koa = require('koa');
const app = new koa();
const bodyParser = require('koa-bodyparser');
const views = require('koa-views');
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
app.use(serve(__dirname + '/public'));

//view engine

  app.use(views(__dirname + '/views', {
    extension: 'hbs',
    map: { hbs: 'handlebars' },
    options: {
        partials: {
          header: 'partials/header',
          footer: 'partials/footer'
        }
      }
  }));

  
  //routes
  router.get('/', async (ctx) => {
    await ctx.render('index', {
      msg: 'test',
      title: 'Main Page'
    });
  });
  
  router.get('*', async (ctx) => {
    await ctx.render('404', {
      msg: 'Page not found',
      title: 'Not found'
    });
  });




app.use(router.routes());
app.use(router.allowedMethods());


http.createServer(app.callback()).listen(3500);