const jsonWebToken = require('jsonwebtoken')
const Router = require('koa-router')
const { find, create, findById, update, delete: del, login, checkOwner } = require('../controllers/users')
const router = new Router({
    prefix: '/user'
})
const { secret } = require('../config')

const auth = async (ctx, next) => {
    const { authorization = '' } = ctx.request.header
    const token = authorization.replace('Bearer ', '')
    try {
        const user = jsonWebToken.verify(token, secret);
        ctx.state.user = user
    } catch (err) {
        ctx.throw(401, err.message)
    }
    await next()
}

router.get('/', find)
router.post('/', create)
router.get('/:id', auth, findById)
router.patch('/:id', auth, checkOwner, update)
router.delete('/:id', auth, checkOwner, del)
router.post('/login', login)

module.exports = router