import React, {lazy, Suspense} from 'react';

import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const LoginPageContainer = lazy(() => import('./components/LoginPage/LoginPageContainer'));

class App extends React.Component {
    componentDidMount() {
         this.props.initializeApp();
    }

    render() {

        if (!this.props.isInitialized) {
            return <Preloader />
        }
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className="app_wrapper">

                    <HeaderContainer/>
                    <div className="app_main">
                        <NavbarContainer/>
                        <div className="app_wrapper_content">
                            <Suspense fallback={<Preloader/>}>
                            <Routes>
                                <Route path='/profile/'
                                       element={<ProfileContainer/>}/>
                                <Route
                                    path="/"
                                    element={<Navigate to="/profile"/>}
                                />
                                <Route path='/dialogs/*'
                                       element={<DialogsContainer/>}/>

                                <Route path='/profile/:userId'
                                       element={<ProfileContainer />}/>
                                <Route path='/users/*'
                                       element={<UsersContainer/>}/>
                                <Route path='/login/'
                                       element={<LoginPageContainer/>}/>

                            </Routes>
                            </Suspense>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.userAuth.isAuth,
        login: state.userAuth.login,
        userId: state.userAuth.userId,
        isInitialized: state.app.isInitialized
    }
}

const AppContainer = connect(mapStateToProps, {
    initializeApp
})(App);

const MyApp = (props) => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </React.StrictMode>
    );
}

export default MyApp;