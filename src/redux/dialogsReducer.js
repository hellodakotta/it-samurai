const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

export const addMessageCreator = (postMessage, userId) => ({
    type: ADD_MESSAGE,
    postMessage: postMessage,
    userId: userId
});
export const updateMessageTextCreator = (postMessage) => ({
    type: UPDATE_MESSAGE_TEXT,
    postMessage: postMessage
});

const initialState = {
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

}

const dialogsReducer = (state=initialState, action) => {

    let stateCopy;
    switch (action.type) {
        case ADD_MESSAGE:
            let newItem = {
                'id': 4,
                'text': action.postMessage,
                'user_id': action.userId
            }

            return {
                ...state,
                messages: [...state.messages, newItem]
            };
            break;

        default:
            return state;
            break;
    }


}

export default dialogsReducer;