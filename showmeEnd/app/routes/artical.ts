const jsonWebToken = require('jsonwebtoken')
const Router = require('koa-router')
const { addArtical, findArticals, findArtical, deleteArtical, updateArtical} = require('../controllers/artical')
const { secret } = require('../config')

const router = new Router({
    prefix: '/artical'
})


router.post('/addArtical', addArtical)
router.get('/findArticals', findArticals)
router.get('/findArtical', findArtical)
router.put('/updateArtical', updateArtical)
router.delete('/deleteArtical', deleteArtical)

module.exports = router
export {};
