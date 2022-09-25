import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _callSubscriber() {
    },
    _state: {
        profilePage: {
            posts: [
                {'id': 1, 'message': 'Hi, how are you?', 'likesCount': 15},
                {'id': 2, 'message': 'It\'s my first post.', 'likesCount': 20},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {'id': 1, 'name': 'Gleb'},
                {'id': 2, 'name': 'Daria'},
                {'id': 3, 'name': 'Mark'},
                {'id': 4, 'name': 'Sergey'},
                {'id': 5, 'name': 'Tatiana'},
                {'id': 6, 'name': 'Ira'}
            ],
            messages: [
                {'id': 1, 'user_id': 1, 'text': 'Hi! How are you?'},
                {'id': 2, 'user_id': 2, 'text': 'I\'m fine. Thanks!'},
                {'id': 3, 'user_id': 1, 'text': 'I\'m fine too, thanks.'},
            ],
            newMessageText: ''
        },
        sidebar: {
            friends: [
                {'id': 1, 'name': 'Phil', 'src': 'userpic1.jpg'},
                {'id': 2, 'name': 'Raul', 'src': 'userpic2.jpg'},
                {'id': 3, 'name': 'Marcus', 'src': 'userpic1.jpg'},
            ]
        }
    },
    subscribe(observer) {
        this._callSubscriber = observer; //наблюдатель
    },
    getState() {
        console.log(this._state);
        return this._state;
    },

    dispatch(action) { //action - объект { type: 'ADD-POST' }
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}



export default store;
window.store = store;