const Koa = require('koa');
const session = require('koa-session');
const app = new Koa();

app.keys = ['some secret hurr']; // cookie的签名

const CONFIG = {
  key: 'koa.sess',
  maxAge: 86400000, // 过期时间
  autoCommit: true,
  overwrite: true,
  httpOnly: true, // 只有服务器端可以获取cookie
  signed: true,
  rolling: false, // 每次访问更新session
  renew: false, // 快要过期的时候才会更新
}

app.use(session(CONFIG, app));

app.use(ctx => {
  // ignore favicon
  if (ctx.path === '/favicon.ico') return;
 
  let n = ctx.session.views || 0;
  ctx.session.views = n + '测试的';

  ctx.body = n + ' views';
});

app.listen(3002);