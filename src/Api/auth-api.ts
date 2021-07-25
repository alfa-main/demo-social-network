import { instance, ResponseType, ResultCodeForCaptcha, ResultCodes } from "./Api";

type AuthMeResponseType = {
    id: number,
    email: string,
    login: string
}

type LoginResponseType = {
    userId: number
}

export const authApi = {
    authMe() {
        return instance.get<ResponseType<AuthMeResponseType>>(`auth/me`)
            .then(res => res.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<ResponseType<LoginResponseType, ResultCodes | ResultCodeForCaptcha>>(`auth/login`, { email, password, rememberMe, captcha })
            .then(res => res.data)
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(res => res.data)
    }
}