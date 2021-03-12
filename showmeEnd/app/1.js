const jsonWebToken = require('jsonwebtoken')
const a = jsonWebToken.sign({name: 123}, 'Wang525715')
console.log(jsonWebToken.verify(a, 'Wang525715'))