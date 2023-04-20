import axios from 'axios';
// main work for api
let apiResource = {
    protocol: "http",
    host: "",
    url: "",
    method: "",
    data: {}, // body
    params: "", // querystring
    err: "",
    headers: {
        'Content-Type': 'application/json',
    },
    MakeURI: function () {
        let desURL = ""
        if (this.protocol != "") {
            desURL += this.protocol + "://"
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
        return desURL
    }
}
let apiWorker = {
    request: {},
    response: {},
    SendRequest: function () {
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
    },
    WithHandleResponse: function (callbackFunc) {
        this.HandleResponse = callbackFunc
        return this
    },
    WithNewHeader: (header) => {
        this.resource.headers.header = header
        return this
    },
    HandleResponse: function (data) {
        this.response = data
    },
    SetAPIResource: function (host, url, method, data, params, headers) {
        this.request = apiResource
        this.request.host = host
        this.request.url = url
        if (method === null || method === undefined || method === "") {
            method = "GET"
        }
        this.request.method = method
        this.response.data = data
        this.request.params = params
        this.request.headers = headers
    }
}

function validateApi(apiResourse) {
    return true
}

export default apiWorker