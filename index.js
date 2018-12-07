const koa = require('koa');
const app = new koa();
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const router = new Router();
const cors = require('@koa/cors')
const helmet = require('koa-helmet')
const serve = require('koa-static-server')

app.use(serve({rootDir: 'dist'}))

app.use(cors())
app.use(helmet())
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
  router.get('/testapi', async ctx => {
    ctx.body = 
      [{
        "id":1,
        "name":"John Dou",
        "age":24,
        "hoobies": [
          "music",
          "dance"
        ],
        "email": "jdou@gmail.com",
        "img": "https://e1.am.phnx.pics/phnx/bigmir/70/40/69/704069/255b4eb08644fe9fef7abdfe2869d031-quality_80Xresize_crop_1Xallow_enlarge_0Xw_730Xh_562.jpg"
    },
    {
        "id":2,
        "name":"Bob Smith",
        "age":27,
        "email": "bobs@gmail.com",
        "img": "https://e1.am.phnx.pics/phnx/bigmir/70/36/80/703680/4e483e632fc93769b7117284b4f6dc2f-quality_80Xresize_crop_1Xallow_enlarge_0Xw_730Xh_562.jpg"
    },
    {
        "id":3,
        "name":"Alice",
        "age":"23",
        "email": "alice@gmail.com",
        "img": "https://e1.am.phnx.pics/phnx/bigmir/70/39/53/703953/e8cbadf95ecc4fef3ce4bf86beb40313-quality_80Xresize_crop_1Xallow_enlarge_0Xw_730Xh_562.jpg"
    }]
    
  });

  router.post('/', async ctx => {
      console.log(ctx.response.body.username)
      await ctx.redirect('/')
  })


app.use(router.routes());
app.use(router.allowedMethods());


app.listen(3201);