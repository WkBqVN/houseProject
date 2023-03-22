// house middleware
// get
exports.getListHouses = () => {
    // return list of houses with full info to house obj
    console.log("listofhosues")
}

exports.getHouseById = (req, res) => {
    console.log(req.params.id)
} 

exports.getListHouseByUserId = (req, res) => {
    console.log("getListHouseByUserId")
}

