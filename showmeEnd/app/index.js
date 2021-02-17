const Koa = require('koa');
const bodyparser = require('koa-bodyparser')
const routing = require('./routes/index')
const err = require('koa-json-error')
const parameter = require('koa-parameter')
const mongoose = require('mongoose')
const { connectionStr } = require('./config')

const app = new Koa();

mongoose.connect(connectionStr, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('mongoDB 连接成功')
})

mongoose.connection.on('error', (err) => {
    console.error.bind(console, 'connection error:')
})

app.use(err({
    postFormat: (err, {stack, ...rest}) => {
        return process.env.NODE_ENV === 'production' ? rest: {stack, ...rest}
    }
}))

app.use(bodyparser())
app.use(parameter(app))
routing(app)
app.listen(3000, () => {console.log('程序启动')});