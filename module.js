// //  Modules 

const names = require('./secret')
const sayhi = require('./anotherModule')
const name = require ('./alternativeflavor')
require ('./midereader')

console.log(name)

sayhi('Mark')
sayhi(names.john)
sayhi(names.Elon)



// sayhi('Marquis')
// sayhi(john)
// sayhi(Elon)