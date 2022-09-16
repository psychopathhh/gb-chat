import axios from "axios";

class Request {
    constructor() {
        this.request = axios.create({
            baseURL: 'https://api.github.com'
        })
    }
    get = url => this.request.get(url)
    post = (url, params) => this.request.post(url, params)
}

export const request = new Request()