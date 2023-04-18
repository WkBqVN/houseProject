// handle or solve request
// data is should a obj generate for anyt type
const ApiData = {
    data: {
        type: string,
        method: string,
        data: string,
        url: string,
        header: {
            contentType: string
        },
        body: {},
        variables: {},
    },
    handlerFunc: function () { },
    execute: function () { }
}
const apiFactory = {
    sendRequest: () => sendRequest,
    createAPIData: (apiType) => setRequestApiData
}
function sendRequest(apiData, handlerFunc) {
    // rest
    apiData.execute()
    return dataNotedHouse
}
function setRequestApiData(apiType) {
    ApiData.type = apiType
    if (validateApiRequestData(ApiData)) {

    }
    return
}
export default apiFactory 