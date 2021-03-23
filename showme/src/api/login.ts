import axios from '../util/axios'
import { AxiosResponse } from 'axios'

export interface userInfo {
    userName: string;
    password: string;
}
interface loginResponse {
    token: string
}

export function userLogin (data: userInfo): Promise<AxiosResponse<loginResponse>>
export function userLogin(data: userInfo): Promise<AxiosResponse<loginResponse>> {
    return axios.post<loginResponse>('/user/login', data)
}

export function userRegister (data: userInfo): Promise<AxiosResponse<loginResponse>>
export function userRegister(data: userInfo): Promise<AxiosResponse<loginResponse>> {
    return axios.post<loginResponse>('/user/register', data)
}

export function getLoginStatus(): Promise<AxiosResponse<loginResponse>> {
    return axios.get<loginResponse>('/user/judgeLogin')
}
export function getUserInfo(): Promise<AxiosResponse<loginResponse>> {
    return axios.get<loginResponse>('/user/getUserInfo')
}