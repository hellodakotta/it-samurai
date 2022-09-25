import React from 'react';
import s from "./Users.module.css";
import User from "./User/User";
import Preloader from "../common/Preloader/Preloader";
import Paginator from "../common/Paginator/Paginator";



const Users = (props) => {

    let users = props.users;
    let usersItems = users.map(u => (
        <User isFollowing={props.isFollowing}
              followToggler={props.onFollowToggler}
              key={u.id}
              user={u}/>
    ));

    return (
        <div>
            <div className={s.wrapper}>
                {props.isFetching ? <Preloader /> : null}
                {usersItems}
            </div>

                <Paginator onPageChanged={props.onPageChanged}
                           totalItemsCount={props.totalUsersCount}
                           pageSize={props.pageSize}
                           currentPage={props.currentPage}
                           portionSize={props.portionSize}
                />

        </div>
    );
}

export default Users;