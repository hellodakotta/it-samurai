import React from 'react';
import {connect} from 'react-redux';

import {getUsers, onFollowToggler} from "../../redux/usersReducer";
import Users from "./Users";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFetching,
    getIsFollowing,
    getPageSize,
    getTotalUsersCount,
    getPortionSize,
    requestUsers,
} from "../../redux/usersSelectors";


class UsersContainer extends React.Component {

    onPageChanged = (p) => {
        this.props.getUsers(p, this.props.pageSize);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onFollowToggler(userId) {
        this.props.onFollowToggler(userId);
    }

    render() {
        return (
            <Users
                onPageChanged={this.onPageChanged}
                totalUsersCount={this.props.totalUsersCount}
                onFollowToggler={this.onFollowToggler.bind(this)}
                users={this.props.users}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                portionSize={this.props.portionSize}
                isFetching={this.props.isFetching}
                isFollowing={this.props.isFollowing}
            />
        );
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         isFollowing: state.usersPage.isFollowing
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: requestUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowing: getIsFollowing(state),
        portionSize: getPortionSize(state)
    }
}

export default compose(
    connect(mapStateToProps, {getUsers, onFollowToggler}),
    withAuthRedirect
)(UsersContainer);