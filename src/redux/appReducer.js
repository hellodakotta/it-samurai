import {authAPI} from "../api/api";
import {authMe} from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

const initialState = {
    isInitialized: false
}

const appReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            // let obj = {
            //     ...state,
            //     ...action.data,
            //     isAuth: true,
            //     userId: action.data.userId,
            //     email: null
            // }
            //
            // return obj;

            let obj = {
                ...state,
                isInitialized: true
            };
            console.log("app reducer return ",obj)
            return obj;
            break;

        default:
            return state;
            break;
    }
}

export const setInitializedAC = () => ({type: SET_INITIALIZED});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authMe());

    Promise.all([promise]).then(() => {
        dispatch(setInitializedAC());
      }
    );




}



export default appReducer;