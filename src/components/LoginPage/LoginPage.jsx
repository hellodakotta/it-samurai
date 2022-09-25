import React from 'react';
import LoginFormikForm from "./LoginForm/Formik/LoginFormikForm";


const LoginPage = ({userLogin}) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginFormikForm userLogin={userLogin}/>
        </div>
    );
}

export default LoginPage;