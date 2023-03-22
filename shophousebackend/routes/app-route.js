// app route
let AppM = require("../middleware/app/app-m")
const express = require("express")
const router = express.Router()

router.get('/app', AppM.welcome);

module.exports = router