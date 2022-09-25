import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";

import {initializeProfile, saveStatus} from "../../redux/profileReducer";
import {withRouter} from "../../hoc/withRouter";
import {compose} from "redux";
import {Navigate} from "react-router";
import Preloader from "../common/Preloader/Preloader";

class ProfileContainer extends React.Component {

    state = {
        profileInfo: this.props.profileInfo,
        status: this.props.status,
        userId: this.props.userId,
        isProfileInitialized: this.props.isProfileInitialized,
    }
    componentDidMount() {
        let router = this.props.router;
        let params = router.params;

        let userId = params.userId
            ? params.userId
            : (this.props.userId ? this.props.userId : null );

        if (userId) {
            this.props.initializeProfile(userId);
        }

        this.setState({
            userId: userId
        });

    }




    render() {
        let router = this.props.router;
        let params = router.params;
        if (!this.props.userId && !params.userId) {
            return <Navigate to={'/login/'} />
        }
        if (!this.props.isProfileInitialized) {
            return <Preloader />
        }
        return (
            <Profile {...this.props}
                     saveStatus={this.props.saveStatus}
                     profileInfo={this.props.profileInfo}/>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo,
        status: state.profilePage.status,
        userId: state.userAuth.userId,
        isProfileInitialized: state.profilePage.isProfileInitialized
    }
}



export default compose(
    connect(mapStateToProps, {initializeProfile, saveStatus}),
    //withAuthRedirect,
    withRouter,
)(ProfileContainer);

