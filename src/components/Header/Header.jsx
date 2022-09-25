import React from 'react';
import s from './Header.module.css';
import Login from "./Login/Login";

const Header = (props) => {

    return (
        <header className={s.header}>
            <div className={s.loginBlock}>
                <Login
                    onLogoutClick={props.onLogoutClick}
                    userId={props.userId}
                    isAuth={props.isAuth}
                    login={props.login} />
            </div>
        </header>

    );
}

export default Header;