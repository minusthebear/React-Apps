import React, {useState} from 'react';
import { connect } from 'react-redux';
import Formsy from 'formsy-react';
import './LoginSignup.scss';
import { requestCreateUserAccount } from '../redux/actions/signupActions';

const Signup = ({ userExists, successfulCreate, requestCreateUserAccount }) => {

    let [ username, setUsername ] = useState('');
    let [ password, setPassword ] = useState('');

    function submitForm() {
        if (usernamePasswordLengthChecks()) {
            requestCreateUserAccount(username, password);
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
        return !usernamePasswordLengthChecks() || successfulCreate;
    }

    function messageContainerClasses() {
        return userExists ? "login-message-container login-error-message" : "login-message-container";
    }

    return <div className="card p-3 col-6">
        <h2>
            Complete this form to create a new account.
        </h2>

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
                placeholder="password"
                name="password"
                className="form-control mt-2"
                onChange={passwordChange}
                value={password}
            />
            <div className={messageContainerClasses()}>
                {userExists ? <p>A user by that name already exists.</p> : null}
                {successfulCreate ? <p>Please wait while your info is being created...</p> : null}
            </div>
            <button
                type="submit"
                disabled={disabledSubmit()}
                className="form-control mt-2 btn btn-primary">Sign Up
            </button>
        </Formsy>

    </div>
};

const mapStateToProps = state => {
    return {
        userExists: state.signupReducer.userExists,
        successfulCreate: state.signupReducer.successfulCreate
    };
};
const mapDispatchToProps = dispatch => {
    return {
        requestCreateUserAccount: (username, password) => dispatch(requestCreateUserAccount(username, password))
    };
};

const ConnectedSignup = connect(mapStateToProps, mapDispatchToProps)(Signup);

export default ConnectedSignup;