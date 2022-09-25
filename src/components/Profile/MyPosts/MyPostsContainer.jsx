import React from 'react';
import {addPost} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from 'react-redux';

let mapStateToProps = (state) => {

    return {
        posts: state.profilePage.posts,
        isFetching: state.profilePage.isFetching,
        newPostText: state.profilePage.newPostText,
    }
}


let MyPostsContainer = connect(mapStateToProps, {
    addPost
})(MyPosts);

export default MyPostsContainer;