const userInfooModel = require('../model/user');

class UserCtl {
    async addUser(ctx) {
        ctx.verifyParams({
            userName: 'string',
            password: 'string'
        });
        const user = await new userInfooModel(ctx.request.body).save();
        ctx.body = user
    }
}
module.exports = new UserCtl();