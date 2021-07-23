import { instance, ResultCodeForCaptcha, ResultCodes } from "./Api"

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