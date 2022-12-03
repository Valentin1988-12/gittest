const http=require('http')
const port = 8080
//передаем два парамеtра функции request respons (req - запрос, res - ответ)
const server = http.createServer((req, res)=> {
    res.end("Hello, World!")
})

server.listen(port, ()=>{
    console.log('Server listening on: http://localhost:%s', port)
})