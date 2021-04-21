import { authApi, securityApi } from "../Api/Api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';
const SET_CAPTCHA_URL_SUCCESS = 'SET-CAPTCHA-URL-SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null // if null, then captcha is not required
}

const authReducer = (state = initialState, action) => {
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

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth }
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: SET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl }
});

export const getAuthUserData = () => async (dispatch) => {
    const response = await authApi.authMe();
    if (response.data.resultCode === 0) {
        const { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    const response = await authApi.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    }
    else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        const message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit('login', { _error: message }));
    }
}


export const logout = () => async (dispatch) => {
    const response = await authApi.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityApi.getCaptchaUrl();
    const captchaUrl = response.data.url;
    debugger;
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}


export default authReducer;