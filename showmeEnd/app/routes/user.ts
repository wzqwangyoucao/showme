const jsonWebToken = require('jsonwebtoken')
const Router = require('koa-router')
const { addUser } = require('../controllers/user')

const router = new Router({
    prefix: '/user'
})

router.post('/register', addUser)

module.exports = router
