import { profileApi } from "../Api/Api";
import { stopSubmit } from "redux-form";

const ADD_POST = 'PROFILE/ADD-POST';
const UPDATE_POST_MESSAGE = 'PROFILE/UPDATE-POST-MESSAGE';
const UPDATE_POST_TITLE = 'PROFILE/UPDATE-POST-TITLE';
const UPDATE_POST_IMAGE = 'PROFILE/UPDATE-POST-IMAGE';
const INCREASE_LIKE = 'PROFILE/INCREASE-LIKE';
const DESCREASE_LIKE = 'PROFILE/DESCREASE-LIKE';
const DELETE_POST = 'PROFILE/DELETE-POST';
const SET_USER_PROFILE = 'PROFILE/SET-USER-PROFILE';
const SET_STATUS = 'PROFILE/SET-STATUS';
const SAVE_PHOTO_SUCCESS = 'PROFILE/SAVE-PHOTO-SUCCESS';
const SAVE_PROFILE_SUCCESS = 'PROFILE/SAVE-PROFILE-SUCCESS';

let initialState = {
    posts: [
        { id: 1, title: 'My posts', message: 'I want to work propgrammer', image: 'https://image.api.playstation.com/cdn/EP0177/CUSA05674_00/rnnJiqNSkmOAPsSEgv5a5O1m2cFODvuP.png', likesCount: 0, liked: false },
        { id: 2, title: 'My posts', message: 'I want to work propgrammer ', image: 'https://i.pinimg.com/originals/df/33/ed/df33ed9f3c8eda51084580a19455fef2.jpg', likesCount: 0, liked: false },
        { id: 3, title: 'My posts', message: 'I want to work propgrammer ', image: 'https://img.pravda.com/images/doc/c/9/c9c3290-haker-12296.jpg', likesCount: 0, liked: false },
        { id: 4, title: 'My posts', message: 'I want to work propgrammer ', image: 'https://m.iguides.ru/upload/iblock/abe/abe66fd0cf78e016f453ee6b3dd6d0da.jpg', likesCount: 0, liked: false },
        { id: 5, title: 'My posts', message: 'I want to work propgrammer ', image: 'https://www.anti-malware.ru/files/styles/imagesize400w/public/images/source/news412.png?itok=eNzt1132', likesCount: 0, liked: false },
        { id: 6, title: 'My posts', message: 'I want to work propgrammer ', image: 'https://habrastorage.org/webt/qm/hw/66/qmhw66hf0z2z4crwrxi6szec6pw.png', likesCount: 0, liked: false },
    ],
    newPostMessage: '',
    newPostTitle: '',
    newPostImage: '',
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
                    title: action.title,
                    message: action.message,
                    image: action.image,
                    likesCount: 0,
                    liked: false
                }],
                newPostMessage: '',
                newPostTitle: '',
                newPostImage: ''
            }
        }
        case UPDATE_POST_MESSAGE: {
            return {
                ...state,
                newPostMessage: action.newPostText
            }
        }
        case UPDATE_POST_TITLE: {
            return {
                ...state,
                newPostTitle: action.newPostTitle
            }
        }
        case UPDATE_POST_IMAGE: {
            return {
                ...state,
                newPostImage: action.newPostImage
            }
        }
        case INCREASE_LIKE: {
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.postId) {
                        return { ...post, likesCount: post.likesCount + 1, liked: true }
                    }
                    return post;
                })
            }
        }
        case DESCREASE_LIKE: {
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.postId) {
                        return { ...post, likesCount: post.likesCount - 1, liked: false }
                    }
                    return post;
                })
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(post => {
                    if (post.id === action.postId) return post.id !== action.postId;
                    return post;
                })
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

export const addPost = (title, message, image) => ({ type: ADD_POST, title, message, image });
export const updatePostMessage = (newPostText) => ({ type: UPDATE_POST_MESSAGE, newPostText });
export const updatePostTitle = (newPostTitle) => ({ type: UPDATE_POST_TITLE, newPostTitle });
export const updatePostImage = (newPostImage) => ({ type: UPDATE_POST_IMAGE, newPostImage });
export const increaseLike = (postId) => ({ type: INCREASE_LIKE, postId });
export const descreaseLike = (postId) => ({ type: DESCREASE_LIKE, postId });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
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