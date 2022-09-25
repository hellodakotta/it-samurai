import React from 'react';
import s from './Friend.module.css';
import {NavLink} from "react-router-dom";




const Friend = (props) => {

    let friend = props.friend;

    return (
        <div className={s.item}>
            <div className={s.pic}>
                <NavLink to={`/profile/${friend.id}`}><img alt={friend.name} src={friend.photos.small} /></NavLink>
            </div>
            <div className={s.name}>{friend.name}</div>
        </div>
    );
}

export default Friend;