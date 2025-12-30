/// make server using nodejs

const http = require("http");
//HTTP (HyperText Transfer Protocol) is a communication protocol that defines how data is sent and received between a client (browser/app) and a server over the internet.

const server = http.createServer(function(req, res){
    res.end("hello from other side");
});

server.listen(3000);






