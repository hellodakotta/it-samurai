import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const USER_LOGOUT = 'USER_LOGOUT';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            let obj = {
                ...state,
                ...action.data,
                isAuth: true,
                userId: action.data.userId,
                email: null
            }

            return obj;
            break;

        case USER_LOGOUT:
            return {
                ...state,
                ...action.data,
                isAuth: false,
                userId: null
            }
        default:
            return state;
            break;
    }
}

export const setUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export const userLogoutAC = () => ({type: USER_LOGOUT});

export const authMe = () => async (dispatch) => {
    let data = await authAPI.authMe();
    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setUserData(id, email, login));
    }
}

export const logout = () => async (dispatch) => {
    let data = await authAPI.logout();

    if (data.resultCode === 0) {
        dispatch(userLogoutAC());
    }
}

export default authReducer;