import { instance } from "./Api"

type SecurityApiResponseType = {
    url: string
}

export const securityApi = {
    getCaptchaUrl() {
        return instance.get<SecurityApiResponseType>(`security/get-captcha-url`)
        .then(response => response.data)
    },
}