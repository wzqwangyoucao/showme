const mongoose = require('mongoose')
const {
    Schema,
    model
} = mongoose

const userSchema = new Schema({
    __v: {type: Number, select: false},
    name: {type: String, require: true},
    age: {type: Number, require: false},
    password: {type: String, require: true, select: false}
});

module.exports = model('User', userSchema);