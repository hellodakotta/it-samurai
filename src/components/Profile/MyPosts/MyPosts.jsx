import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import PostFormikForm from "./PostFormikForm/PostFormikForm";

const MyPosts = (props) => {

    let posts = props.posts;

    var postsItems = posts.map(post => (
        <Post key={post.id} likeCount={post.likesCount} message={post.message}/>
    ));
console.log("POSTS RENDER")


    return (
        <div className={s.posts}>
            <PostFormikForm addPost={props.addPost} />

            <h4>My Posts</h4>

            {postsItems}
        </div>
    );
}

export default MyPosts;