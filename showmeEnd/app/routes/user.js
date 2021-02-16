const Router = require('koa-router')
const { find, create, findById, update, delete: del } = require('../controllers/users')
const router = new Router({
    prefix: '/user'
})

const auth = async (ctx, next) => {
    console.log('测试')
    await next()
}

router.get('/', auth, find)
router.post('/', create)
router.get('/:id', findById)
router.put('/:id', update)
router.delete('/:id', del)

module.exports = router