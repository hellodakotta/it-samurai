import {authAPI, profileAPI} from "../api/api";
import {setUserData} from "./authReducer";

const ADD_POST = 'ADD_POST';
const SET_PROFILE_INFO = 'SET_PROFILE_INFO';
const SET_STATUS = 'SET_STATUS';
const CHANGE_STATUS_TEXT = 'CHANGE_STATUS_TEXT';
const SAVE_USER_STATUS = 'SAVE_USER_STATUS';
const INITIALIZE_PROFILE = 'INITIALIZE_PROFILE';

const initialState = {
    posts: [
        {'id': 1, 'message': 'Hi, how are you?', 'likesCount': 15},
        {'id': 2, 'message': 'It\'s my first post.', 'likesCount': 20},
    ],
    newPostText: '',
    profileInfo: {
        photos: {},
        contacts: {}
    },
    status: null,

    paramsUserId: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZE_PROFILE:
            return {
                ...state,
                isProfileInitialized: true
            }
            break;
        case ADD_POST:
            let newPost = {
                'id': 3,
                'message': action.text,
                'likesCount': 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
            break;

        case SET_PROFILE_INFO:
            let obj = {
                ...state,
                profileInfo: {
                    ...action.data.profileInfo,
                    photos: {
                        ...action.data.profileInfo.photos
                    },
                    contacts: {
                        ...action.data.profileInfo.contacts
                    },

                },
                paramsUserId: action.data.userId
            }
            return obj;
            break;
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
            break;
        case CHANGE_STATUS_TEXT:
            return {
                ...state,
                newStatusText: action.text
            }
            break;
        case SAVE_USER_STATUS:
            return {
                ...state,
                status: action.text
            }
            break;
        default:
            return state;
            break;
    }
}

export const addPost = (text) => ({type: ADD_POST, text: text});

export const setProfileInfo = (profileInfo, userId) => ({type: SET_PROFILE_INFO, data: {profileInfo, userId}});
export const setUserStatus = (status) => ({type: SET_STATUS, status});

export const changeStatusText = (text) => ({type: CHANGE_STATUS_TEXT, text});
export const saveUserStatus = (text) => ({type: SAVE_USER_STATUS, text});

export const initializeProfileAC = () => ({type: INITIALIZE_PROFILE});


export const getProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.getProfile(userId);
    dispatch(setProfileInfo(data, userId));
}

export const getStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(data));
}

export const saveStatus = (status) => async (dispatch) => {
    let data = await profileAPI.putStatus(status);

    if (data.resultCode === 0) {
        dispatch(saveUserStatus(status));
    }
}

export const initializeProfile = (userId) => (dispatch) => {
    let promiseProfile = dispatch(getProfile(userId));
    let promiseStatus = dispatch(getStatus(userId));

    Promise.all([promiseProfile, promiseStatus]).then(() => {
        console.log("profile resolved")
        dispatch(initializeProfileAC());
    });
}

export default profileReducer;