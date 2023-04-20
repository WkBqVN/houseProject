import axios from 'axios';
// main work for api
let apiResource = {
    host: "",
    url: "",
    method: "",
    data: {}, // body
    methodProtocol: "",
    params: "", // querystring
    err: "",
    headers: {
        'Content-Type': 'application/json',
    },
    MakeURI: function () {
        let desURL = ""
        if (this.methodProtocol != "") {
            desURL += this.methodProtocol + "://"
        } else {
            this.err = "Missed method protocol"
            return
        }
        if (this.host != "") {
            desURL += this.host
        } else {
            this.err = "Missed api destination host"
            return
        }
        if (this.url != "") {
            desURL += this.url
        } else {
            this.err = "Missed api url"
            return
        }
        if (this.params != "") {
            desURL += "?" + this.params
        }
        console.log(desURL)
        return desURL
    }
}
let apiWorker = {
    resourceData: {},
    responseData: {},
    SendRequest: function () {
        if (validateApi(this.resourceData) && this.resourceData.err == "") {
            axios({
                url: this.resourceData.MakeURI(),
                method: this.resourceData.method,
                data: this.resourceData.data,
                headers: this.resourceData.headers,
            }).then(data => this.HandleResponse(data))
        } else {
            console.log("Failed to send request " + this.resourceData.err)
        }
    },
    WithHandleResponse: function (callbackFunc) {
        this.HandleResponse = callbackFunc
    },
    WithNewHeader: (header) => {
        this.resource.headers.header = header
    },
    HandleResponse: function (data) {
        this.responseData = data
    },
    SetAPIResource: function (protocol, host, url, method, data, params, headers) {
        this.resourceData = apiResource
        if (protocol === null || protocol === undefined || protocol === "") {
            protocol = "https"
        }
        this.resourceData.methodProtocol = protocol
        this.resourceData.host = host
        this.resourceData.url = url
        if (method === null || method === undefined || method === "") {
            this.resourceData.method = "GET"
        }
        this.resourceData.method = method
        this.responseData.data = data
        this.resourceData.params = params
        this.resourceData.headers = headers
    }
}



function validateApi(apiResourse) {
    return true
}

export default apiWorker