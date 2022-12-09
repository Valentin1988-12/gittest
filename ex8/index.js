const EvenEmitter = require('events').EventEmitter
const channel = new EvenEmitter

channel.on('join', ()=>{
    console.log('Welcome')
})

channel.emit('join')