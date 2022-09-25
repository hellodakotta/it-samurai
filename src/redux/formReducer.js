import {authAPI} from "../api/api";
import {authMe} from "./authReducer";
import * as formik from "formik";

const SET_FORMIK_STATUS = 'SET_FORMIK_STATUS';

let initialState = {

}

const formReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_FORMIK_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
            break;
    }
}

export const setFormikStatus = (msg) => ({type: SET_FORMIK_STATUS, msg});

export const userLogin = (email, password, rememberMe, captcha, status) => (dispatch) => {
    let responseMessage = null;
       authAPI.login(email, password, rememberMe, captcha, status).then(data => {
            if (data.resultCode === 0) {
                dispatch(authMe());
            } else {
                status(data.messages[0])
            }
        });



}

export default formReducer;