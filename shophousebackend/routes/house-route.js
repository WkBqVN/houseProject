// house routes
let m_house = require('../middleware/house/m-house')
const express = require("express")
const router = express.Router()

router.get('/houses', m_house.getListHouses);
router.get('/:id',m_house.getHouseById)

module.exports = router