import React from 'react';
import s from './Login.module.css';
import {NavLink} from "react-router-dom";

const Login = (props) => {
    return (
        <header className={s.header}>
            <div className={s.loginBlock}>
                {props.isAuth ?
                    <span><NavLink to={`/profile/${props.userId}`}>{props.login}</NavLink> <button onClick={props.onLogoutClick}>Logout</button></span>
                    : <NavLink to={'/login'}>Login</NavLink>
                    }
            </div>
        </header>

    );
}

export default Login;