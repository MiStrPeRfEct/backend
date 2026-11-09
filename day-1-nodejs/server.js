let http = require('http');


let server = http.createServer((req, res) =>{
    console.log("hello i ma server")
    res.end("ok maine tumahri fariyad sun  li")
})
server.listen(3000,()=>{
    console.log("server is running on port 3000")
})