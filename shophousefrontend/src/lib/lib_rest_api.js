// handle or solve request
const apiFactory = {
    sendRequest : () => sendRequest
}
function sendRequest() {
    var dataNotedHouse = require('../data/dummydata/dummydata.json')
    return dataNotedHouse
}

export default apiFactory 