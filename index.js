const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const helmet = require('koa-helmet');
const serve = require('koa-static-server');
const router = require('./routes/router');

const app = new Koa();

app.use(serve({ rootDir: 'dist' }))
  .use(cors())
  .use(helmet())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());


// logs
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Responce-Time');
  global.console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Responce-Time', `${ms}ms`);
});


const port = process.env.PORT || 3201;
app.listen(port, () => { global.console.log(`listen on ${port}`); });
