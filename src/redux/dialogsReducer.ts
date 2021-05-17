const SEND_MESSAGE = 'SEND-MESSAGE';

export type InitialStateType = typeof initialState;

type DialogType = {
    id: number,
    name: string
}

type MessageType = {
    id: number,
    message: string
}

let initialState = {
    dialogs: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Svetlana' },
        { id: 4, name: 'Vlad' },
        { id: 5, name: 'Alex' },
        { id: 6, name: 'Valera' },
    ] as Array<DialogType>,
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your study?' },
        { id: 3, message: 'What is the weather like today?' },
        { id: 4, message: 'yo' },
        { id: 5, message: 'yo' },
        { id: 6, message: 'yo' },
    ] as Array<MessageType>
}

export const dialogsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 7, message: body }]
            };

        default:
            return state;
    }
}

type SendMessageCreator = {
    type: typeof SEND_MESSAGE,
    newMessageBody: string
}

export const sendMessageActionCreator = (newMessageBody: string): SendMessageCreator => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;