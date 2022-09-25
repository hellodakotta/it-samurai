import {usersAPI} from "../api/api";

const SET_FRIENDS = 'SET_FRIENDS';

let initialState = {
    friends: []
}

const sidebarReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_FRIENDS:
            if(typeof state.friends.length > 0) {
                return state
            }
            return {
                ...state,
                friends: [...action.friends]
            }

        default:
            return state;
            break;
    }
}

export const setFriends = (friends) => ({type: SET_FRIENDS, friends});

export const getFriends = (currentPage, count, friend) => {
    return (dispatch) => {
        usersAPI.getUsers(currentPage, count, friend).then(data => {
            dispatch(setFriends(data.items));
        });
    }
}


export default sidebarReducer;