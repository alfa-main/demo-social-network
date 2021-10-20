import { profileApi } from "../Api/profile-api";
import { FormAction, stopSubmit } from "redux-form";
import { PostType, ProfileType, PhotosType } from "../types/types";
import { BaseThunkType, InferActionsTypes } from './redux-store';

const ADD_POST = 'PROFILE/ADD-POST';
const UPDATE_POST_MESSAGE = 'PROFILE/UPDATE-POST-MESSAGE';
const UPDATE_POST_TITLE = 'PROFILE/UPDATE-POST-TITLE';
const UPDATE_POST_IMAGE = 'PROFILE/UPDATE-POST-IMAGE';
const INCREASE_LIKE = 'PROFILE/INCREASE-LIKE';
const DECREASE_LIKE = 'PROFILE/DECREASE-LIKE';
const DELETE_POST = 'PROFILE/DELETE-POST';
const SET_USER_PROFILE = 'PROFILE/SET-USER-PROFILE';
const SET_STATUS = 'PROFILE/SET-STATUS';
const SAVE_PHOTO_SUCCESS = 'PROFILE/SAVE-PHOTO-SUCCESS';
const SAVE_PROFILE_SUCCESS = 'PROFILE/SAVE-PROFILE-SUCCESS';

export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
export type ThunkTypeProfile = BaseThunkType<ActionsTypes | FormAction>;

let initialState = {
    posts: [
        { id: 1, title: 'My posts', message: 'I work programmer', image: 'https://image.api.playstation.com/cdn/EP0177/CUSA05674_00/rnnJiqNSkmOAPsSEgv5a5O1m2cFODvuP.png', likesCount: 0, liked: false },
        { id: 2, title: 'My posts', message: 'I work programmer ', image: 'https://i.pinimg.com/originals/df/33/ed/df33ed9f3c8eda51084580a19455fef2.jpg', likesCount: 0, liked: false },
        { id: 3, title: 'My posts', message: 'I work programmer ', image: 'https://img.pravda.com/images/doc/c/9/c9c3290-haker-12296.jpg', likesCount: 0, liked: false },
        { id: 4, title: 'My posts', message: 'I work programmer ', image: 'https://m.iguides.ru/upload/iblock/abe/abe66fd0cf78e016f453ee6b3dd6d0da.jpg', likesCount: 0, liked: false },
        { id: 5, title: 'My posts', message: 'I work programmer ', image: 'https://www.anti-malware.ru/files/styles/imagesize400w/public/images/source/news412.png?itok=eNzt1132', likesCount: 0, liked: false },
        { id: 6, title: 'My posts', message: 'I work programmer ', image: 'https://habrastorage.org/webt/qm/hw/66/qmhw66hf0z2z4crwrxi6szec6pw.png', likesCount: 0, liked: false },
    ] as Array<PostType>,
    newPostMessage: '' as string,
    newPostTitle: '' as string,
    newPostImage: '' as string,
    profile: null as ProfileType | null,
    status: '' as string
}

const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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
        case DECREASE_LIKE: {
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
            return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType }
        }
        case SAVE_PROFILE_SUCCESS: {
            return { ...state, profile: action.profile }
        }

        default:
            return state;
    }
}

export const actions = {
    addPost: (title: string, message: string, image: string) => ({ type: ADD_POST, title, message, image } as const),
    updatePostMessage: (newPostText: string) => ({ type: UPDATE_POST_MESSAGE, newPostText } as const),
    updatePostTitle: (newPostTitle: string) => ({ type: UPDATE_POST_TITLE, newPostTitle } as const),
    updatePostImage: (newPostImage: string) => ({ type: UPDATE_POST_IMAGE, newPostImage } as const),
    increaseLike: (postId: number) => ({ type: INCREASE_LIKE, postId } as const),
    decreaseLike: (postId: number) => ({ type: DECREASE_LIKE, postId } as const),
    deletePost: (postId: number) => ({ type: DELETE_POST, postId } as const),
    setUserProfile: (profile: ProfileType) => ({ type: SET_USER_PROFILE, profile } as const),
    setStatus: (status: string) => ({ type: SET_STATUS, status } as const),
    savePhotoSuccess: (photos: PhotosType) => ({ type: SAVE_PHOTO_SUCCESS, photos } as const),
    saveProfileSuccess: (profile: ProfileType) => ({ type: SAVE_PROFILE_SUCCESS, profile } as const)
}

export const getUserProfile = (userId: number): ThunkTypeProfile => async (dispatch) => {
    let response = await profileApi.getProfile(userId);
    dispatch(actions.setUserProfile(response));
}

export const getStatus = (userId: number): ThunkTypeProfile => async (dispatch) => {
    let response = await profileApi.getStatus(userId);
    dispatch(actions.setStatus(response));
}

export const updateStatus = (status: string): ThunkTypeProfile => async (dispatch) => {
    let response = await profileApi.updateStatus(status);
    if (response.resultCode === 0) {
        dispatch(actions.setStatus(status));
    }
}

export const savePhoto = (file: File): ThunkTypeProfile => async (dispatch) => {
    let response = await profileApi.savePhoto(file);
    if (response.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(response.data.photos));
    }
}

export const saveProfile = (profile: ProfileType): ThunkTypeProfile => async (dispatch) => {
    let response = await profileApi.saveProfile(profile);
    if (response.resultCode === 0) {
        dispatch(actions.saveProfileSuccess(profile));
    } else {
        dispatch(stopSubmit('editProfile', { _error: response.messages[0] }));
        return Promise.reject(response.messages[0]);
    }
}

export default profileReducer;