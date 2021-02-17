const User = require('../models/users')
const jsonWebToken = require('jsonwebtoken')
const { secret } = require('../config')

class UserCtl {
    async find (ctx) {
        ctx.set('Allow', 'GET, POST')
        ctx.body = await User.find()
    }
    async findById(ctx) {
        const user = await User.findById(ctx.params.id)
        if(!user) {
            ctx.throw(404, '用户不存在')
        } else {
            ctx.body = user
        }
    }
    async checkOwner(ctx, next) {
        if(ctx.params.id !== ctx.state.user._id) {
            ctx.throw(403, '无操作权限')
        }
        await next()
    }
    async create(ctx) {
        ctx.verifyParams({
            name: {type: 'string', required: true},
            age: {type: 'number', required: false},
            password: {type: 'string', required: true}
        })
        const { name } = ctx.request.body
        const repeatedUser = await User.findOne({name})
        if (repeatedUser) {
            ctx.throw(409, '用户已存在')
        }
        const user = await new User(ctx.request.body).save()
        ctx.body = user
    }
    async update(ctx) {
        const user = await User.findByIdAndUpdate(ctx.params.id, ctx.request.body)
        if(!user) {
            ctx.throw(404, '用户不存在')
        }
        ctx.body = user
    }
    async delete(ctx) {
        const user = await User.findByIdAndRemove(ctx.params.id)
        if(!user) {
            ctx.throw(404, '用户不存在')
        }
        ctx.body = user
    }
    async login(ctx) {
        ctx.verifyParams({
            name: {type: 'string', required: true},
            password: {type: 'string', required: true}
        })
        const user = await User.findOne(ctx.request.body)
        if(!user) {
            ctx.throw(401, '用户名或密码不正确')
        }
        const {_id, name} = user
        const token = jsonWebToken.sign({ _id, name }, secret, {expiresIn: '1d'})
        ctx.body = { token }
    }
}
module.exports = new UserCtl()