const http = require("http");
//HTTP (HyperText Transfer Protocol) is a communication protocol that defines how data is sent and received between a client (browser/app) and a server over the internet.

const server = http.createServer(function(req, res){
    res.end("hello from other side");
})

let port = 3000;

let ser = server.listen(port,function(){
    console.log(`server is running on port ${port}`);
})

console.log(ser);

