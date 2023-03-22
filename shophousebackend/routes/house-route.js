// house routes
let houseM = require('../middleware/house/house-m')
const express = require("express")
const router = express.Router()

router.get('/listHouse', houseM.getListHouses);
router.get('/:id',houseM.getHouseById)

module.exports = router