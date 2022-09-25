import React from 'react';
import Friends from "./Friends";
import * as axios from "axios";
import {connect} from "react-redux";
import {getFriends} from "../../../redux/sidebarReducer";
import {usersAPI} from "../../../api/api";


class FriendsContainer extends React.Component {
    componentDidMount() {
        this.props.getFriends(1, 10, true);
    }


    render() {
        return (
            <Friends friends={this.props.friends} />
            );
    }
}

let mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends

    }
}

export default connect(mapStateToProps, {
    getFriends
})(FriendsContainer);