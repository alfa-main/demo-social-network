import { createStore, combineReducers, applyMiddleware, compose, Action } from 'redux';
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from './appReducer';
import { ThunkAction } from "redux-thunk";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

type RootReducer = typeof rootReducer;
export type AppStateType = ReturnType<RootReducer>;

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export type BaseThunkType<AT extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, AT>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));



export default store;