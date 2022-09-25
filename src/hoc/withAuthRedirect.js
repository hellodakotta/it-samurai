import React from "react";
import {Navigate} from "react-router";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.userAuth.isAuth,
        paramsUserId: state.profilePage.paramsUserId

    }
}

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            // if (!this.props.isAuth && !this.props.userId) return <Navigate to={'/login/'} />
            return (<Component {...this.props}/>)
        }
    }


    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect, {})(RedirectComponent);

    return ConnectedAuthRedirectComponent;
 }