const Router = require('koa-router')
const router = new Router()
const HomeCtl = require('../controllers/home')

router.get('/', HomeCtl.index)

module.exports = router