import React from 'react';

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = ({userId, status, profileInfo, saveStatus}) => {


    return (
        <div>
            <ProfileInfo
                userId={userId}
                status={status}
                profileInfo={profileInfo}
                saveStatus={saveStatus}
            />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;