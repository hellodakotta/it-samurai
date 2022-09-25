import React from 'react';

import s from './User.module.css';
import {NavLink} from "react-router-dom";


const User = (props) => {


    return (
        <div className={s.item}>
            <div className={s.left}>
                <NavLink to={`/profile/${props.user.id}`} className={s.userpic}>
                    <img alt='' src={props.user.photos.small?props.user.photos.small:process.env.PUBLIC_URL + '/images/userpic2.jpg' } />
                </NavLink>

                <button
                    disabled={props.isFollowing.some(id => parseInt(id) === parseInt(props.user.id))}
                    className={props.user.followed ? s.btnUnfollow : s.btnFollow}
                    onClick={() => props.followToggler(props.user.id)}>{props.user.followed ? 'Unfollow' : 'Follow'}</button>
            </div>
            <div className={s.right}>
                <div>{props.user.name}</div>
                {/*<div>{props.user.location.country}, {props.user.location.city}</div>*/}
                <div className={s.status}>{props.user.status}</div>
            </div>
        </div>
    );
}

export default User;