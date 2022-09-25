import { configureStore } from '@reduxjs/toolkit'
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import {combineReducers} from "redux";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk';
import formReducer from "./formReducer";
import appReducer from "./appReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    userAuth: authReducer,
    form: formReducer,
    app: appReducer
});

let store = configureStore({
    reducer: reducers,
    middleware: [thunkMiddleware]

});

window.store = store;

export default store;

