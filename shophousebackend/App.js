//Entry house backend server
// => Nodejs receive port: 6000 
// => Nodejs send port: 6060 

var cors = require('cors')
const express = require('express')

const app = express()

app.use(cors())

let appRoute = require('./routes/app-route')
let houseRoute = require('./routes/house-route')

app.use("/", appRoute)
app.use("/house",houseRoute)

app.listen(6060)
