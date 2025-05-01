const os = require('os')
const user = os.userInfo()

console.log(os.uptime())
console.log(user)

// Dont forget to add () after the function  like... os.function(())
console.log(`The total memory of the system is ${os.totalmem()}\n`)

const currentOS={
    name:os.type(),
    release:os.release(),
    mem:os.totalmem(),
    free:os.freemem()
}

console.log(currentOS)