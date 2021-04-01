const SEND_MESSAGE = 'SEND-MESSAGE';

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

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            debugger;
            return {
                ...state,
                messages: [...state.messages, { id: 7, message: body }]
            };

        default:
            return state;
    }
}

export const sendMessageActionCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;