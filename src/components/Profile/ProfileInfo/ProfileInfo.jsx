import React from 'react';
import s from './ProfileInfo.module.css';
import UserSocialsIcon from "../../common/UserSocialsIcon/UserSocialsIcon";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if (!props.profileInfo ) {
        return <div><Preloader /></div>
    }
    let contacts = props.profileInfo.contacts;

    let contactsHtml = Object.keys(contacts).map((key, index) => {

        if (contacts[key]) {
            return(
                <a href={`${contacts[key]}`} key={index}><UserSocialsIcon iconType={key} /></a>
            );
        }
    })
    return (
        <div>
            {props.profileInfo.photos.large ? <div className={s.userpic}>
                <img src={props.profileInfo.photos.large} alt=""/>
            </div> : ''}

            <h2>{props.profileInfo.fullName}</h2>

            <ProfileStatusWithHooks {...props} />

            {props.profileInfo.aboutMe ? <div className={s.aboutMe}>{props.profileInfo.aboutMe}</div> : ''}
            <div>
                <div>{props.profileInfo.lookingForAJob ? <div>Ищу работу!</div> : 'Не ищу работу.'}</div>

                    {props.profileInfo.lookingForAJob && props.profileInfo.lookingForAJobDescription ?
                        <div className={s.job_desc}>&mdash; {props.profileInfo.lookingForAJobDescription}</div>: ''}
            </div>
            <div className={s.contacts}>
                {contactsHtml}
            </div>
        </div>
    )
}

export default ProfileInfo;