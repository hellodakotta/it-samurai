import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import FriendsContainer from "./Friends/FriendsContainer";


const Navbar = (props) => {
    return (
        <div className={s.sidebar}>
            <nav className={s.nav}>
                <div><NavLink className={navData => navData.isActive ? `${s.active} ${s.item}` : s.item}
                              to="/profile">Profile</NavLink></div>
                <div><NavLink className={navData => navData.isActive ? `${s.active} ${s.item}` : s.item}
                              to="/dialogs">Messages</NavLink></div>
                <div><NavLink className={navData => navData.isActive ? `${s.active} ${s.item}` : s.item}
                              to="/news">News</NavLink></div>
                <div><NavLink className={navData => navData.isActive ? `${s.active} ${s.item}` : s.item}
                              to="/music">Music</NavLink></div>
                <div><NavLink className={navData => navData.isActive ? `${s.active} ${s.item}` : s.item}
                              to="/users">Users</NavLink></div>
                <div><NavLink className={navData => navData.isActive ? `${s.active} ${s.item}` : s.item}
                              to="/settings">Settings</NavLink></div>
            </nav>

            <FriendsContainer friends={props.sidebar.friends}/>
        </div>
    );
}

export default Navbar;