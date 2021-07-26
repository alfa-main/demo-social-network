import { securityApi } from './../Api/security-api';
import { authApi } from './../Api/auth-api';
import { ResultCodes, ResultCodeForCaptcha } from "../Api/Api";
import { FormAction, stopSubmit } from "redux-form";
import { BaseThunkType, InferActionsTypes } from './redux-store';

const SET_USER_DATA = 'SET-USER-DATA';
const SET_CAPTCHA_URL_SUCCESS = 'SET-CAPTCHA-URL-SUCCESS';

export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsTypes | FormAction>;

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captchaUrl: null as string | null // if null, then captcha is not required
}

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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

export const actions = {
    setAuthUserData : (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: SET_USER_DATA,
        payload: { userId, email, login, isAuth }
    } as const),
    getCaptchaUrlSuccess : (captchaUrl: string) => ({
        type: SET_CAPTCHA_URL_SUCCESS,
        payload: { captchaUrl }
    } as const),
}

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    const response = await authApi.authMe();
    if (response.resultCode === ResultCodes.Success) {
        const { id, email, login } = response.data;
        dispatch(actions.setAuthUserData(id, email, login, true));
    }
}

export const login = (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
    ): ThunkType => async (dispatch) => {
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


export const logout = (): ThunkType => async (dispatch) => {
    const response = await authApi.logout()
    if (response.resultCode === ResultCodes.Success) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const response = await securityApi.getCaptchaUrl();
    const captchaUrl = response.url;
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}


export default authReducer;