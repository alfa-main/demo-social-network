import { profileApi } from "../Api/Api";
import { stopSubmit } from "redux-form";
import { PostType, ProfileType, PhotosType } from "../types/types";

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

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {
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
            // @ts-ignore
            return { ...state, profile: { ...state.profile, photos: action.photos } }
        }
        case SAVE_PROFILE_SUCCESS: {
            return { ...state, profile: action.profile }
        }

        default:
            return state;
    }
}

type AddPostType = {
    type: typeof ADD_POST, 
    title: string, 
    message: string, 
    image: string
}
export const addPost = (title: string, message: string, image: string): AddPostType => ({ type: ADD_POST, title, message, image });

type UpdatePostMessage = {
    type: typeof UPDATE_POST_MESSAGE, 
    newPostText: string 
}
export const updatePostMessage = (newPostText: string): UpdatePostMessage => ({ type: UPDATE_POST_MESSAGE, newPostText });

type UpdatePostTitle = {
    type: typeof UPDATE_POST_TITLE, 
    newPostTitle: string 
}
export const updatePostTitle = (newPostTitle: string): UpdatePostTitle => ({ type: UPDATE_POST_TITLE, newPostTitle });

type UpdatePostImage = {
    type: typeof UPDATE_POST_IMAGE, 
    newPostImage: string 
}
export const updatePostImage = (newPostImage: string): UpdatePostImage => ({ type: UPDATE_POST_IMAGE, newPostImage });

type IncreaseLikeType = {
    type: typeof INCREASE_LIKE, 
    postId: number 
}
export const increaseLike = (postId: number): IncreaseLikeType => ({ type: INCREASE_LIKE, postId });

type DescreaseLikeType = {
    type: typeof DESCREASE_LIKE, 
    postId: number 
}
export const descreaseLike = (postId: number): DescreaseLikeType => ({ type: DESCREASE_LIKE, postId });

type DeletePostType = {
    type: typeof DELETE_POST, 
    postId: number
}
export const deletePost = (postId: number): DeletePostType => ({ type: DELETE_POST, postId });

type SetUserProfileType = {
    type: typeof SET_USER_PROFILE,
    profile:  ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({ type: SET_USER_PROFILE, profile });

type SetStatusType = {
    type: typeof SET_STATUS, 
    status: string
}
export const setStatus = (status: string): SetStatusType => ({ type: SET_STATUS, status });

type savePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS, 
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): savePhotoSuccessType => ({ type: SAVE_PHOTO_SUCCESS, photos });

type SaveProfileSuccessType = {
    type: typeof SAVE_PROFILE_SUCCESS,
    profile:  ProfileType
}
export const saveProfileSuccess = (profile: ProfileType):SaveProfileSuccessType  => ({ type: SAVE_PROFILE_SUCCESS, profile });

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let response = await profileApi.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileApi.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status: string) => async (dispatch: any) => {
    let response = await profileApi.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileApi.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any) => {
    let response = await profileApi.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(saveProfileSuccess(profile));
    } else {
        dispatch(stopSubmit('editProfile', { _error: response.data.messages[0] }));
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;