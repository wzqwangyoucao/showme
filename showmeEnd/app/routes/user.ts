const jsonWebToken = require('jsonwebtoken')
const Router = require('koa-router')
const { addUser, find, deleteUser, loginUser, judgeSelf, getUserInfo, judgeUserLogin } = require('../controllers/user')
const { secret } = require('../config')

const router = new Router({
    prefix: '/user'
})

const auth = async (ctx, next) => {
    const { authorization = '' } = ctx.request.header
    const token = authorization.replace('Bearer ', '') // 前端设置在token中会在header中增加authorization字段 然后也会在jsonWebToken上增加Bearer字段
    try {
        const user = jsonWebToken.verify(token, secret);
        ctx.state.user = user
    } catch (err) {
        ctx.throw(401, err.message)
    }
    await next()
}

router.post('/register', addUser)
router.post('/login', loginUser)
router.get('/find', find)
router.delete('/deleteUser/:id', auth, judgeSelf, deleteUser)
router.get('/judgeLogin', judgeUserLogin)
router.get('/getUserInfo', auth, getUserInfo)

module.exports = router
export {};
