import { usersApi } from "../Api/Api";
import { updateObjectInArray } from "../utils/objectHelpers";
import { UsersType } from "../types/types";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./redux-store";
import { Dispatch } from "react";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

type FollowingInProgressType = {

}

let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 10 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number,
    isFetching: true as boolean,
    followingInProgress: [] as Array<number>, // array of user id
}

type InitialStateType = typeof initialState;

type ActionsTypes =
    FollowSuccessType |
    UnfollowSuccessType |
    SetUsersType |
    SetCurrentPageType |
    SetTotalUsersCountType |
    ToggleIsFetchingType |
    ToggleFollowingProgressType
    ;

type DispatchType = Dispatch<ActionsTypes>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

const usersReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

type FollowSuccessType = {
    type: typeof FOLLOW, 
    userId: number 
}
export const followSuccess = (userId: number): FollowSuccessType => ({ type: FOLLOW, userId });
type UnfollowSuccessType = {
    type: typeof UNFOLLOW, 
    userId: number 
}
export const unfollowSuccess = (userId: number): UnfollowSuccessType => ({ type: UNFOLLOW, userId });
type SetUsersType = {
    type: typeof SET_USERS, 
    users: any
}
export const setUsers = (users: any): SetUsersType => ({ type: SET_USERS, users });
type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE, 
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({ type: SET_CURRENT_PAGE, currentPage });
type SetTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT, 
    totalUsersCount: number
}
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountType => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
type ToggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING, 
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({ type: TOGGLE_IS_FETCHING, isFetching });
type ToggleFollowingProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS, 
    isFetching: boolean, 
    userId: number 
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressType => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export const requestUsers = (page: number, pageSize: number): ThunkType =>
    async (dispatch, getState) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    let response = await usersApi.getUsers(page, pageSize)    
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
}

const _followUnfollowFlow = async (dispatch: DispatchType,
    userId: number,
    apiMethod: any,
    actionCreator: (userId: number) => FollowSuccessType | UnfollowSuccessType
) => {    
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId: number): ThunkType =>
    async (dispatch) => {
    _followUnfollowFlow(dispatch, userId, usersApi.followUsers.bind(usersApi), followSuccess);
}

export const unfollow = (userId: number): ThunkType =>
    async (dispatch) => {
    _followUnfollowFlow(dispatch, userId, usersApi.unfollowUsers.bind(usersApi), unfollowSuccess);
}

export default usersReducer;