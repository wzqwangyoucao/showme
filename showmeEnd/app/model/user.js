const {
    Schema, model
} = require('mongoose')

const userInfoSchema = new Schema({
    __v: { type: Number, select: false },
    userName: { type: String, require: true },
    password: { type: String, require: true }
});

module.exports = model('userInfooModel', userInfoSchema)