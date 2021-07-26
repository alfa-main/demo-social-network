import axios from 'axios';
import { UsersType } from '../types/types';

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': "297b774d-fb48-4548-bf21-b56702caae4a"
    },
})

export enum ResultCodes {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}

export type GetItemsType = {
    items: Array<UsersType>,
    totalCount: number,
    error: string
}

export type APIResponseType<D = {}, RC = ResultCodes> = {
    data: D,
    messages: Array<string>,
    resultCode: RC
}