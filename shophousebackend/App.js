//Entry house backend server
// => Nodejs receive port: 6000 
// => Nodejs send port: 6060 
const express = require('express')

const app = express()

let thin = require('./routes/AppRouters')
let welcome = require

app.use("/hello", thin)

app.listen(6060)
