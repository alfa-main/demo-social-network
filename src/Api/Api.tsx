import axios from 'axios';
import { ProfileType, UsersType } from '../types/types';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': "297b774d-fb48-4548-bf21-b56702caae4a"
    },
})

type GetUsers = {
    items: Array<UsersType>,
    totalCount: number,
    error: string
}

type UnfollowUsersType = {
    resultCode: ResultCodes,
    messages: Array<string>,
    data: any
}

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<GetUsers>(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    },
    unfollowUsers(usersId: number) {
        return instance.delete<UnfollowUsersType>(`follow/${usersId}`)
        .then(response => response.data)
    },
    followUsers(usersId: number) {
        return instance.post(`follow/${usersId}`)
    },
    getProfile(userId: number) {
        console.warn('Obsolete method. Please profileAPI object')
        return profileApi.getProfile(userId);
    }
}

export const profileApi = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, { status })
    },
    savePhoto(photoFile: any) {
        let formData = new FormData;
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile)
    },
}

export enum ResultCodes {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}

type AuthMeResponseType = {
    data: { id: number, email: string, login: string },
    resultCode: ResultCodes,
    messages: Array<string>
}

type LoginResponseType = {
    data: { userId: number },
    resultCode: ResultCodes | ResultCodeForCaptcha,
    messages: Array<string>
}

type LogoutResponseType = {
    data: { userId: number },
    resultCode: ResultCodes,
    messages: Array<string>
}

export const authApi = {
    authMe() {
        return instance.get<AuthMeResponseType>(`auth/me`)
        .then(res => res.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<LoginResponseType>(`auth/login`, { email, password, rememberMe, captcha })
        .then(res => res.data)
    },
    logout() {
        return instance.delete<LogoutResponseType>(`auth/login`)
        .then(res => res.data)
    }
}

type SecurityApiResponseType = {
    url: string
}

export const securityApi = {
    getCaptchaUrl() {
        return instance.get<SecurityApiResponseType>(`security/get-captcha-url`)
        .then(response => response.data)
    },
}