const articalModel = require('../model/artical');

class ArticalCtl {
    async addArtical(ctx) {
        ctx.verifyParams({
            articalName: 'string',
            articalDetal: 'string'
        });
        const artical = await new articalModel({...ctx.request.body, date: new Date()}).save();
        ctx.body = artical
    }
    async findArticals(ctx) {
        ctx.set('Allow', 'GET, POST')
        const articles = await articalModel.find();
        ctx.body = articles
    }
    async findArtical(ctx) {
        ctx.set('Allow', 'GET, POST')
        const user = await articalModel.findOne(ctx.request.body);
        ctx.body = user
    }
    async updateArtical(ctx) {
        const user = await articalModel.update({id: ctx.request.id}, {$set: {...ctx.request.body, date: new Date()}});
        ctx.body = user
    }
    deleteArtical() {

    }
}

module.exports = new ArticalCtl();
export {};