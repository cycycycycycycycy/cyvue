import axios from 'axios'
import store from '@/store/index.js'
import config from './config'

const baseURL = process.env.NODE_ENV == 'development' ? config.baseURL.dev : config.baseURL.pro

class HttpRequest {
    constructor(baseURL) {
        this.baseURL = baseURL
    }
    getInsideConfig() {
        const config = {
            baseURL: this.baseURL,
            header: []
        }
        return config
    }
    interceptors(instance) {
        // 添加请求拦截器
        instance.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        instance.interceptors.response.use(function (response) {
            // 对响应数据做点什么
            return response;
        }, function (error) {
            // 对响应错误做点什么
            console.log(error);

            return Promise.reject(error);
        });
    }
    request(options) {
        const instance = axios.create()
        options = { ...this.getInsideConfig(), ...options }
        this.interceptors(instance)
        return instance(options)
    }
}

export default new HttpRequest(baseURL)


// axios.defaults.baseURL = ''

// var instance = axios.create({
//     timeout: 5000
// })


// //请求拦截
// instance.interceptors.request.use(config => {
//     return config
// })
// //响应拦截
// instance.interceptors.response.use(response => {
//     return response
// }, err => {
//     return Promise.reject(err)
// })

// export default axios