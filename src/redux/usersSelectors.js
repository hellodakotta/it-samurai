import {createSelector} from "reselect";

const requestUsersSuperSelector = (state) => {
    return state.usersPage.users;
}

export const requestUsers = createSelector(requestUsersSuperSelector, (users) => {
    return users.filter(u=>true);
});

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}
export const getPortionSize = (state) => {
    return state.usersPage.portionSize;
}


export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getIsFollowing = (state) => {
    return state.usersPage.isFollowing;
}

