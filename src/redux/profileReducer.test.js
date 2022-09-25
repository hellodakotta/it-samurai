import React from 'react';
import profileReducer, {addPost} from "./profileReducer";
import {render, screen} from "@testing-library/react";
import App from "../App";

it('lenght of posts should be incremented', () => {
    //1. test data
    let action = addPost("Test post");
    const state = {
        posts: [
            {'id': 1, 'message': 'Hi, how are you?', 'likesCount': 15},
            {'id': 2, 'message': 'It\'s my first post.', 'likesCount': 20},
        ]
    }
    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(3);
});

