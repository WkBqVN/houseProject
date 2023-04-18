// lis is use ts for design good
// singleton design for apidata let use one at one time
import apiFactory from "./apiFactory"

class ApiData {
    private inputType: string;
    private outputType: string;
    private instance: ApiData;

    private constructor(inputType: string, outputType: string) {
        this.inputType = inputType
        this.outputType = outputType
    }

    getInputType() {
        return this.inputType
    }
    getOutputType() {
        return this.outputType
    }
    setInputType(inputType: string) {
        this.inputType = inputType
    }
    setOutputType(outputType: string) {
        this.outputType = outputType
    }

    getRequestData(inputType: string) {
        return apiFactory.createRequestData(inputType)
    }
    getResponseData(outputType: string) {
        return apiFactory.createResponseData(this.outputType)
    }

    getInstance() {
        if (this.instance == null) {
            this.instance = new ApiData("", "")
        }
        return this.instance
    }

    withDefault(inputType: string, outputType: string) {
        this.setInputType(inputType)
        this.setOutputType(outputType)
    }
}
