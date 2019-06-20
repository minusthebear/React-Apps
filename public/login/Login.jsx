import React, { useState } from 'react';
import { connect } from 'react-redux';
import './LoginSignup.scss';
import { Link } from 'react-router-dom';
import Formsy from 'formsy-react';
import {loginUserAccount} from "../redux/actions/loginActions";

const Login = ({loginUserAccount, loginWarning })=> {

    let [ username, setUsername ] = useState('');
    let [ password, setPassword ] = useState('');

    function submitForm() {
        if (usernamePasswordLengthChecks()) {
            loginUserAccount(username, password);
        }
    }

    function usernamePasswordLengthChecks() {
        return username.length > 2 && password.length > 4;
    }

    function usernameChange(e) {
        setUsername(e.target.value);
    }

    function passwordChange(e) {
        setPassword(e.target.value);
    }

    function disabledSubmit() {
        return !usernamePasswordLengthChecks();
    }

    function messageContainerClasses() {
        return loginWarning ? "login-message-container login-error-message" : "login-message-container";
    }

    return (
        <div className="card p-3 col-6">
            <h3>
                Please login
            </h3>
            <h5>
                <Link to="/signup">
                    Don't have an account? Sign up.
                </Link>
            </h5>
            <Formsy onSubmit={submitForm}>
                <input
                    type="text"
                    placeholder="User Name"
                    name="username"
                    className="form-control mt-2"
                    onChange={usernameChange}
                    value={username}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="form-control mt-2"
                    onChange={passwordChange}
                    value={password}
                />
                <div className={messageContainerClasses()}>
                    { loginWarning ? <p>There was an error logging in.</p> : null}
                </div>
                <button type="submit" disabled={disabledSubmit()} className="form-control mt-2 btn btn-primary login-button">
                    Login
                </button>
            </Formsy>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        loginWarning: state.loginReducer.loginWarning
    }
};
const mapDispatchToProps = dispatch => {
    return {
        loginUserAccount: (username, password) => dispatch(loginUserAccount(username, password))
    };
};
const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);

export default ConnectedLogin;