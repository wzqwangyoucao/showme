const userInfooModel = require('../model/user');
const { secret } = require('../config')
const jsonWebToken = require('jsonwebtoken')

class UserCtl {
    async find(ctx) {
        ctx.set('Allow', 'GET, POST')
        const user = await userInfooModel.find();
        ctx.body = user
    }
    async addUser(ctx) {
        ctx.verifyParams({
            userName: 'string',
            password: 'string'
        });
        const { userName } = ctx.request.body
        const repeatedUser = await userInfooModel.findOne({userName})
        if (repeatedUser) {
            ctx.throw(409, '用户已存在')
        }

        const user = await new userInfooModel(ctx.request.body).save();

        const {_id, name} = user
        const token = jsonWebToken.sign({ _id, name }, secret, {expiresIn: '1d'})
        ctx.body = { token }
    }
    async deleteUser(ctx) {
        const user = await userInfooModel.findByIdAndRemove(ctx.params.id)
        if (!user) {
            ctx.body = '错误'
        } else {
            ctx.body = '成功'
        }
    }
    async loginUser(ctx) {
        ctx.verifyParams({
            userName: {type: 'string', required: true},
            password: {type: 'string', required: true}
        })
        const user = await userInfooModel.findOne(ctx.request.body)
        if(!user) {
            ctx.throw(401, '用户名或密码不正确')
        }
        const {_id, name} = user
        const token = jsonWebToken.sign({ _id, name }, secret, {expiresIn: '1d'})
        ctx.body = { token }
    }
    async judgeSelf(ctx) {
        if(ctx.params.id !== ctx.state.user._id) {
            ctx.throw(403, '无操作权限')
        }
    }
    async getUserInfo(ctx) {
        const userInfo = await userInfooModel.findOne({_id: ctx.state.user._id})
        ctx.body = { userInfo }
    }

    async judgeUserLogin(ctx) {
        const { authorization = '' } = ctx.request.header
        const token = authorization.replace('Bearer ', '') // 前端设置在token中会在header中增加authorization字段 然后也会在jsonWebToken上增加Bearer字段
        try {
            const user = jsonWebToken.verify(token, secret);
            ctx.body =  true
        } catch (err) {
            ctx.body =  false
        }
    }
}
module.exports = new UserCtl();
export {};