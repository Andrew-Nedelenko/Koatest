const koa = require('koa'),
app = new koa(),
bodyParser = require('koa-bodyparser'),
router = require('./routes/router'),
cors = require('@koa/cors'),
helmet = require('koa-helmet'),
serve = require('koa-static-server');


app.use(serve({rootDir: 'dist'}))
.use(cors())
.use(helmet())
.use(bodyParser())
.use(router.routes())
.use(router.allowedMethods());


//logs
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



const port = process.env.port || 3000;
app.listen(port, () => {console.log(`listen on ${port}`)});