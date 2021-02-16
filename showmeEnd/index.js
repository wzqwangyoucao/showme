const Koa = require('koa');
const Router = require('koa-router')
const bodyparser = require('koa-bodyparser')

const app = new Koa();

// const router = new Router()
// router.get('/:id', (ctx) => {
//     ctx.body = '你好世界' + ctx.params.id
// })

// app.use(async ctx => {
//     console.log(ctx)
//     ctx.body = 'Hello World';
// });

// app.use(auth)
// app.use(router.routes())

const userRouter = new Router({
    prefix: '/user'
})

const auth = async (ctx, next) => {
    console.log('测试')
    if (ctx.url !== '/user') {
        ctx.throw(401)
    }
    await next()
}

userRouter.get('/:id', auth, (ctx) => {
    ctx.set('Allow', 'GET, POST')
    ctx.body = '你好世界' + ctx.params.id
})

app.use(bodyparser)
app.use(auth)
app.use(userRouter.allowedMethods())
app.use(userRouter.routes())
app.listen(3000);