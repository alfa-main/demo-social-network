import { InferActionsTypes } from "./redux-store";

const SEND_MESSAGE = 'SEND-MESSAGE';

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;

let initialState = {
    dialogs: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Svetlana' },
        { id: 4, name: 'Vlad' },
        { id: 5, name: 'Alex' },
        { id: 6, name: 'Valera' },
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your study?' },
        { id: 3, message: 'What is the weather like today?' },
        { id: 4, message: 'yo' },
        { id: 5, message: 'yo' },
        { id: 6, message: 'yo' },
    ]
}

export const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 7, message: body }],
            };

        default:
            return state;
    }
}

export const actions = {
    sendMessageActionCreator: (newMessageBody: string) => ({ type: SEND_MESSAGE, newMessageBody } as const)
}

export default dialogsReducer;