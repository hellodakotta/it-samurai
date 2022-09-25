import React, {useEffect, useState} from 'react';

import s from './ProfileStatus.module.css';


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] );

    const activateMode = () => {
        setEditMode(true);
    }

    let onStatusInputFocus = () => {
        setEditMode(true);
    }

    let onChangeStatusText = (text) => {
        setStatus(text);
    }

    let onStatusInputBlur = (text) => {

        setStatus(text);
        props.saveStatus(text);
        setEditMode(false);
    }

    let onStatusLabelClick = () => {

        setEditMode(true);
    }


    return (
        <div>
            {!props.paramsUserId && editMode &&
                <div>
                    <input  type="text"
                            autoFocus={true}
                            onChange={(e) => {onChangeStatusText(e.target.value)}}
                            onFocus={onStatusInputFocus}
                            onBlur={(e) => {onStatusInputBlur(e.target.value)}}
                            value={status}/>

                </div>
            }

            {!editMode &&
            <div onClick={!props.paramsUserId?activateMode:null} className={s.status}>
                {props.status || '--------------'}
            </div>
            }

        </div>
    );
}

export default ProfileStatusWithHooks;