const Koa = require('koa');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')
const parameter = require('koa-parameter')
const bodyparser = require('koa-bodyparser')
const { connectionStr } = require('./config')

const app = new Koa();
const routing = require('./routes/index')

mongoose.connect(connectionStr, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
  console.log('mongoDB 连接成功')
})
mongoose.connection.on('error', (err) => {
  console.error.bind(console, 'connection error:')
})

app.use(bodyparser())
app.use(parameter(app))

routing(app)

app.listen(3002);