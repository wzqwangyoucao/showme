import axios, { AxiosInstance } from 'axios'

const instance: AxiosInstance = axios.create({
    baseURL: '/api',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});

instance.interceptors.request.use(function (config) {
    const token = sessionStorage.getItem('token')
    if (token) {
        config.headers.Authorization = token
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default instance