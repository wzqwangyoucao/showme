const db = [{name: "李雷"}]

class UserCtl {
    find (ctx) {
        ctx.set('Allow', 'GET, POST')
        ctx.body = db
    }
    findById(ctx) {
        ctx.body = db[ctx.params.id]
    }
    create(ctx) {
        db.push(ctx.request.body)
        ctx.body = ctx.request.body
    }
    update(ctx) {
        db[ctx.params.id * 1] = ctx.request.body
        ctx.body = ctx.request.body
    }
    delete(ctx) {
        db.splice(db[ctx.params.id * 1], 1)
    }
}
module.exports = new UserCtl()