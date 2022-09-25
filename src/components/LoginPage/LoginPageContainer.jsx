import React from 'react';
import {connect} from 'react-redux';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import LoginPage from "./LoginPage";
import {userLogin} from "../../redux/formReducer";
import {Navigate} from "react-router";


class LoginPageContainer extends React.Component {

    userLogin = (login, password, rememberMe, captcha, status) => {
       this.props.userLogin(login, password, rememberMe, captcha, status);
    }

    render() {
        if (this.props.isAuth) {
           return <Navigate to={'/profile/'} />
        }
        return (
            <LoginPage userLogin={this.userLogin} />
        );
    }
}

export default compose(
    connect(null, {userLogin}),
    withAuthRedirect
)(LoginPageContainer);