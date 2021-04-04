import { profileApi } from "../Api/Api";
import { stopSubmit } from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';
const SAVE_PROFILE_SUCCESS = 'SAVE-PROFILE-SUCCESS';

let initialState = {
    posts: [
        { id: 1, message: 'It\'s my life. ', likesCount: "20" },
        { id: 2, message: 'Hi. How are you? ', likesCount: "15" },
        { id: 3, message: 'What is the weather like today? ' },
        { id: 4, message: 'yo ' },
        { id: 5, message: 'yo ' },
        { id: 6, message: 'yo ' },
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {
                    id: 7,
                    message: action.newPostBody,
                    likesCount: "0"
                }],
            }
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        case SAVE_PHOTO_SUCCESS: {
            return { ...state, profile: { ...state.profile, photos: action.photos } }
        }
        case SAVE_PROFILE_SUCCESS: {
            return { ...state, profile: action.profile }
        }

        default:
            return state;
    }
}

export const addPost = (newPostBody) => ({ type: ADD_POST, newPostBody });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });
export const saveProfileSuccess = (profile) => ({ type: SAVE_PROFILE_SUCCESS, profile });

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileApi.getProfile(userId)
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileApi.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileApi.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileApi.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch) => {
    let response = await profileApi.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(saveProfileSuccess(profile));
    } else {
        dispatch(stopSubmit('editProfile', { _error: response.data.messages[0] }));
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;