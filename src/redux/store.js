import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'It\'s my life. ', likesCount: "20" },
                { id: 2, message: 'Hi. How are you? ', likesCount: "15" },
                { id: 3, message: 'What is the weather like today? ' },
                { id: 4, message: 'yo ' },
                { id: 5, message: 'yo ' },
                { id: 6, message: 'yo ' },
            ],
            newPostText: 'it-project',
        },
        dialogsPage: {
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
            ],
            newMessageBody: 'Hi!',
        }
    },

    _callSubscriber() {

    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.ProfilePage = profileReducer(this._state.profilePage, action);
        this._state.DialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;