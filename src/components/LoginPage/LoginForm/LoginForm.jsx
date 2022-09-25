import React from 'react';


const LoginForm = (props) => {
    return (
        <div>
            <form>
                <div>
                    <input
                        type='text'
                        placeholder='Login'
                    />
                </div>
                <div>
                    <input
                        type='password'
                        placeholder='Password'
                    />
                </div>
                <div>
                    <label htmlFor='checkbox'>Remember me</label>
                    <input id='checkbox'
                        type='checkbox'
                    />
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;