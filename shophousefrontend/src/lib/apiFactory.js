import axios from 'axios';
// main work for api
let apiResource = {
    desHost: {
        protocol: "http",
        address: "localhost",
        port: "6060",
    },
    url: "",
    method: "",
    data: {}, // body
    params: "", // querystring
    err: "",
    headers: {
        'Content-Type': 'application/json',
    },
    MakeURI: function() {
        let desURL = ""
        if (this.desHost.protocol != "") {
            desURL += this.desHost.protocol + "://"
        }
        if (this.desHost.address != "") {
            desURL += this.desHost.address
        } else {
            this.err = "Missed api destination host"
            return
        }
        if (this.desHost.port != "") {
            desURL += ":" + this.desHost.port
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
        return desURL
    },

}
let apiWorker = {
    request: apiResource,
    response: {},
    message: "",
    SendRequest: function() {
        if (validateApi(this.request) && this.request.err == "") {
            axios({
                url: this.request.MakeURI(),
                method: this.request.method,
                data: this.request.data,
                headers: this.request.headers,
            }).then(data => this.HandleResponse(data))
        } else {
            console.log("Failed to send request " + this.request.err)
        }
        return this
    },
    WithHandleResponse: function(callbackFunc) {
        this.HandleResponse = callbackFunc
        return this
    },
    WithNewHeader: (header) => {
        this.resource.headers.header = header
        return this
    },
    HandleResponse: function(data) {
        this.response = data
    },
    SetAPIResource: function(url, method, data, params, headers) {
        this.request.url = url
        if (method === null || method === undefined || method === "") {
            method = "GET"
        }
        this.request.method = method
        this.response.data = data
        this.request.params = params
        this.request.headers = headers
    },
    SetHost: function(protocol, address, port) {
        this.request.desHost.protocol = protocol
        this.request.desHost.address = address
        this.request.desHost.port = port
    },
    handleData: (data, callbackFunc) => {
        callbackFunc(data)
    },
}

function validateApi(apiResourse) {
    return true
}

export default apiWorker
