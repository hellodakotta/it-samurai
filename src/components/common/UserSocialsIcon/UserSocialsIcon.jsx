import React from "react";
import s from './UserSocialsIcon.module.css';

let UserSocialsIcon = (props) => {
    return (
        <img className={s.socialIcon} src={`${process.env.PUBLIC_URL}/images/socials-${props.iconType}.png`}/>
    )
}

export default UserSocialsIcon