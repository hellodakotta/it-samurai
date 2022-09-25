import React from 'react';

import s from './ProfileStatus.module.css';


const ProfileStatus = (props) => {

    return (
        <div>
            {!props.paramsUserId && props.editMode &&
                <div>
                    <input  type="text"
                            autoFocus={true}
                            onChange={(e) => {props.onChangeStatusText(e.target.value)}}
                            onFocus={props.onStatusInputFocus}
                            onBlur={(e) => {props.onStatusInputBlur(e.target.value)}}
                            value={props.statusText}/>

                </div>
            }

            {!props.editMode &&
            <div onClick={!props.paramsUserId?props.onStatusLabelClick:null} className={s.status}>
                {props.status || '--------------'}
            </div>
            }

        </div>
    );
}

export default ProfileStatus;