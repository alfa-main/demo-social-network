import { securityApi } from './../Api/security-api';
import { authApi } from './../Api/auth-api';
import { ResultCodes, ResultCodeForCaptcha } from "../Api/Api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';
const SET_CAPTCHA_URL_SUCCESS = 'SET-CAPTCHA-URL-SUCCESS';

export type InitialStateType = typeof initialState;

type SetAuthUserDataPayloadType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

type SetAuthUserData = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataPayloadType
}

type GetCaptchaUrlSuccess = {
    type: typeof SET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl: string }
}

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captchaUrl: null as string | null // if null, then captcha is not required
}

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserData => ({
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth }
});

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccess => ({
    type: SET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl }
});

export const getAuthUserData = () => async (dispatch: any) => {
    const response = await authApi.authMe();
    if (response.resultCode === ResultCodes.Success) {
        const { id, email, login } = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    const response = await authApi.login(email, password, rememberMe, captcha)
    if (response.resultCode === ResultCodes.Success) {
        dispatch(getAuthUserData())
    }
    else {
        if (response.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }
        const message = response.messages.length > 0 ? response.messages[0] : "Some error";
        dispatch(stopSubmit('login', { _error: message }));
    }
}


export const logout = () => async (dispatch: any) => {
    const response = await authApi.logout()
    if (response.resultCode === ResultCodes.Success) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityApi.getCaptchaUrl();
    const captchaUrl = response.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}


export default authReducer;