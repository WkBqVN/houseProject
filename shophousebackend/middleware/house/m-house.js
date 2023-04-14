// house middleware
// get
const data = `{
    "baseUrlSrcImage": "../data/dummydata/",
    "houses": [
        {
            "houseId": 1,
            "houseName": "nha 1",
            "housePrice": "asdfsadkfjsdafkjsdakfsdajkj",
            "srcImage": "house1.jpeg"
        },
        {
            "houseId": 2,
            "houseName": "nha 2",
            "housePrice": 30,
            "srcImage": "house2.jpeg"
        },
        {
            "houseId": 3,
            "houseName": "nha 3",
            "housePrice": "asdfsdakfasdfdsjsakfsdaksdfksdafsdkjfskdasdfksdfsdkfjsdafjsadjfsdakfjskdafjsdaj",
            "srcImage": "house1.jpeg"
        },
        {
            "houseId": 4,
            "houseName": "nha 4 dskalfjaskdlfjsdajfsadfjsadlkfjsadfjsadkljfsdajfsdlkfjsdlkfjssdkjksdfsdkafjd",
            "housePrice": 30,
            "srcImage": "house2.jpeg"
        },
        {
            "houseId": 5,
            "houseName": "nha 5",
            "housePrice": 30,
            "srcImage": "house2.jpeg"
        },
        {
            "houseId": 6,
            "houseName": "nha 6",
            "housePrice": 30,
            "srcImage": "house2.jpeg"
        },
        {
            "houseId": 7,
            "houseName": "nha 7",
            "housePrice": 30,
            "srcImage": "house2.jpeg"
        }
    ]
}`
exports.getListHouses = (_,res) => {
    // return list of houses with full info to house obj
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(data)
    return data
}

exports.getHouseById = (req, res) => {
    console.log(req.params.id)
} 

exports.getListHouseByUserId = (req, res) => {
    console.log("getListHouseByUserId")
}

