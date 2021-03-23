const {
    Schema, model
} = require('mongoose')

const articalSchema = new Schema({
    __v: { type: Number, select: false },
    articalName: { type: String, require: true },
    articalDetal: { type: String, require: true },
    date: { type: Date, require: true }
});

module.exports = model('articalModel', articalSchema)