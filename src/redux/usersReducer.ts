import { usersApi } from "../Api/Api";
import { updateObjectInArray } from "../utils/objectHelpers";
import { UsersType } from "../types/types";
import { ThunkAction } from "redux-thunk";
import { AppStateType, InferActionsTypes } from "./redux-store";
import { Dispatch } from "react";

const FOLLOW = 'usersReducer/FOLLOW';
const UNFOLLOW = 'usersReducer/UNFOLLOW';
const SET_USERS = 'usersReducer/SET-USERS';
const SET_CURRENT_PAGE = 'usersReducer/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'usersReducer/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'usersReducer/TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'usersReducer/TOGGLE-IS-FOLLOWING-PROGRESS';

let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 10 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number,
    isFetching: true as boolean,
    followingInProgress: [] as Array<number>, // array of user id
}

type InitialStateType = typeof initialState;

type DispatchType = Dispatch<ActionsTypes>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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

type ActionsTypes = InferActionsTypes<typeof actions>;

export const actions = {
    followSuccess : (userId: number) => ({ type: FOLLOW, userId } as const),
    unfollowSuccess : (userId: number) => ({ type: UNFOLLOW, userId } as const),
    setUsers : (users: any) => ({ type: SET_USERS, users } as const),
    setCurrentPage : (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage } as const),
    setTotalUsersCount : (totalUsersCount: number) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount } as const),
    toggleIsFetching : (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching } as const),
    toggleFollowingProgress : (isFetching: boolean, userId: number) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId } as const),
}

export const requestUsers = (page: number, pageSize: number): ThunkType =>
    async (dispatch, getState) => {
    dispatch(actions.toggleIsFetching(true));
    dispatch(actions.setCurrentPage(page));

    let response = await usersApi.getUsers(page, pageSize)    
    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(response.items));
    dispatch(actions.setTotalUsersCount(response.totalCount));
}

const _followUnfollowFlow = async (dispatch: DispatchType,
    userId: number,
    apiMethod: any,
    actionCreator: (userId: number) => ActionsTypes
) => {    
    dispatch(actions.toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.toggleFollowingProgress(false, userId));
}

export const follow = (userId: number): ThunkType =>
    async (dispatch) => {
    _followUnfollowFlow(dispatch, userId, usersApi.followUsers.bind(usersApi), actions.followSuccess);
}

export const unfollow = (userId: number): ThunkType =>
    async (dispatch) => {
    _followUnfollowFlow(dispatch, userId, usersApi.unfollowUsers.bind(usersApi), actions.unfollowSuccess);
}

export default usersReducer;