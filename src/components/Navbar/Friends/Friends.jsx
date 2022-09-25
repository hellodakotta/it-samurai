import React from 'react';
import s from './Friends.module.css';

import Friend from "./Friend/Friend";


const Friends = (props) => {
    let friends = props.friends;

    let friendsItems = friends.map(f => (
        <Friend id={f.id} key={f.id} friend={f} />
    ));


    return (
        <div className={s.friends}>
            <h4>Friends</h4>
            <div className={s.items}>
            {friendsItems}
            </div>
        </div>
    );
}

export default Friends;