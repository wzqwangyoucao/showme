const Koa = require('koa');
const bodyparser = require('koa-bodyparser')
const routing = require('./routes/index')

const app = new Koa();

app.use(bodyparser())
routing(app)
app.listen(3000, () => {console.log('程序启动')});