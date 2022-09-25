import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.userpic}>
                <div><img alt='' src={process.env.PUBLIC_URL + '/images/userpic2.jpg' } /></div>
                <div>Like {props.likeCount}</div>
            </div>
            <div className={s.message}>{props.message}</div>

        </div>
    );
}

export default Post;