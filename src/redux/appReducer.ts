import { InferActionsTypes } from './redux-store';
import { getAuthUserData } from "./authReducer";

const SET_INITIALIZED_SUCCESS = 'appReducer/SET-INITIALIZED-SUCCESS';

export type InitialStateType = typeof initialState;

type ActionsTypes = InferActionsTypes<typeof actions>;

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
}

const actions = {
    setInitializedSuccess: () => ({ type: SET_INITIALIZED_SUCCESS } as const)
}

export const initializeApp = () => {
    return (dispatch: any) => {
        let promise = dispatch(getAuthUserData());

        Promise.all([promise])
            .then(() => {
                dispatch(actions.setInitializedSuccess());
            })
    }
}

export default appReducer;