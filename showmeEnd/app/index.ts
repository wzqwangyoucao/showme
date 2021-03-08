const Koa = require('koa');
const jwt = require('jsonwebtoken');
const Router = require('koa-router');
const app = new Koa();

var router = new Router();

router.post('/login', (ctx) => {
  ctx.body = {
    name: 'wangzhiqin',
    id: '123123'
  }
})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3002);