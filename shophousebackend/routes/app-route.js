// app route
let AppM = require("../middleware/app/m-app")
const express = require("express")
const router = express.Router()

router.get('/app', AppM.welcome);

module.exports = router