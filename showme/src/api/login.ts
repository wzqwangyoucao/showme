import axios from '../util/axios'
import { AxiosResponse } from 'axios'

export interface userInfo {
    userName: string;
    password: string;
}
interface loginResponse {
    name: string,
    id: number
}

export function userLogin (data: userInfo): Promise<AxiosResponse<loginResponse>>
export function userLogin(data: userInfo): Promise<AxiosResponse<loginResponse>> {
    return axios.post<loginResponse>('/login', data)
}