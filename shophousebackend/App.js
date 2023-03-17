//Entry house backend server
// => Nodejs receive port: 6000 < br >
// => Nodejs send port: 6060 < br >

var http = require("http")
var result = require("./utils/test")

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    res.write(result.myres)
    res.end()
}).listen(6060)