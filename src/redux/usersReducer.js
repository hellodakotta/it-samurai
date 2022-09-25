import {usersAPI} from "../api/api";
import {setFriends} from "./sidebarReducer";
import {updateObjectInArray} from "../helpers/objectHelpers";

const FOLLOW_TOGGLER = 'FOLLOW_TOGGLER';
const SET_USERS = 'SET_USERS';
const SET_USERS_PAGES_COUNT = 'SET_USERS_PAGES_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_LOADER = 'SET_LOADER';
const SET_FOLLOWING_LOADER = 'SET_FOLLOWING_LOADER';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    portionSize: 20,
    isFetching: false,
    isFollowing: [],
    paramsUserId: null,
};

const usersReducer = (state = initialState, action) => {


    switch (action.type) {
        case FOLLOW_TOGGLER:

            let stateCopy = {
                ...state,
                users: updateObjectInArray(state.users, action.data.userId, 'isFollowed', action.data.isFollowed)
            }

            return stateCopy
        case SET_USERS:

            if (typeof state.users.length > 0) {
                return state
            }
            return {
                ...state,
                users: [...action.users]
            }

        case SET_USERS_PAGES_COUNT:
            return {
                ...state,
                totalUsersCount: action.num
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.num,
                users: [...state.users]
            }
        case SET_LOADER:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_FOLLOWING_LOADER:
            let isFollowingArr = [...state.isFollowing];
            if (action.data.isFollowing === true) {
                if (isFollowingArr.indexOf(action.data.userId) === -1) {
                    isFollowingArr.push(action.data.userId)
                }
            } else {
                const index = isFollowingArr.indexOf(action.data.userId);
                if (index > -1) {
                    isFollowingArr.splice(index, 1);
                }
            }

            return {
                ...state,
                isFollowing: isFollowingArr
            }

        default:
            return state;
            break;
    }
}

export const followToggler = (userId, isFollowed) => ({type: FOLLOW_TOGGLER, data: {userId, isFollowed}});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setUsersPagesCount = (num) => ({type: SET_USERS_PAGES_COUNT, num});
export const setCurrentPage = (num) => ({type: SET_CURRENT_PAGE, num});
export const setLoader = (isFetching) => ({type: SET_LOADER, isFetching});
export const setFollowingLoader = (isFollowing, userId) => ({type: SET_FOLLOWING_LOADER, data: {isFollowing, userId}});

export const getUsers = (currentPage, pageSize) => async (dispatch) => {

    dispatch(setLoader(true));
    dispatch(setCurrentPage(currentPage));
    let data = await usersAPI.getUsers(currentPage, pageSize);

    dispatch(setUsers(data.items));
    dispatch(setUsersPagesCount(data.totalCount));
    dispatch(setLoader(false));
}

let followUnfollowFlow = async (dispatch, userId, apiMethod, isFollowed) => {
    let data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(followToggler(userId, isFollowed));
        dispatch(setFollowingLoader(false, userId));
    }
}

export const onFollowToggler = (userId) => async (dispatch) => {
    dispatch(setFollowingLoader(true, userId));
    let isFollowed = await usersAPI.isUserFollowed(userId);
    if (isFollowed === true) {
        await followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser, false)
    } else {
        await followUnfollowFlow(dispatch, userId, usersAPI.followUser, true)
    }

    let usersData = await usersAPI.getUsers(1, 10, true);
    dispatch(setFriends(usersData.items));
}


export default usersReducer;