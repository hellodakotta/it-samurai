import React from 'react';

import s from './MessageItem.module.css';



const MessageItem = (props) => {
let message = props.message;
    let currentUserId = 1;
    let messageClass = 'left';
    if (message.user_id === currentUserId) {
        messageClass = 'right';
    }

    return (
        <div className={`${s.message} ${s[messageClass]}`}>
            <div className={s.userpic}>
                <img alt="" src={process.env.PUBLIC_URL + '/images/userpic' + message.user_id +'.jpg' } />
            </div>
            <div className={s.text}>
                {message.text}
            </div>
        </div>
    );
}

export default MessageItem;