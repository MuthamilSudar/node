console.log("WUID")
const os=require('os')
const { dirname } = require('path')
console.log(os.type())
console.log(__dirname)

const x=require('./math')
console.log(x.add(5,6))
console.log(x.sub(10,5))
console.log(x.div(15,3))
console.log(x.mod(15,2))