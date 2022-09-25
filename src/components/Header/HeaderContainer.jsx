import React from 'react';
import {connect} from 'react-redux';
import Header from "./Header";
import {logout} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
      
    }

    render() {
        return (
            <Header {...this.props} onLogoutClick={this.onLogoutClick} />
        );
    }

    onLogoutClick = () => {
        this.props.logout();
    }
}

let mapStateToProps = (state) => {

    return {
        isAuth: state.userAuth.isAuth,
        login: state.userAuth.login,
        userId: state.userAuth.userId
    }
}


export default connect(mapStateToProps, {
    logout
})(HeaderContainer);

