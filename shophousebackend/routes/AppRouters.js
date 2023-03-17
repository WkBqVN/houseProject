let AppMid = require("../middleware/AppMid")
const express = require("express")
const router = express.Router()

router.get('/welcome', AppMid.welcome);

module.exports = router