import React, {useState} from 'react';
import { connect } from 'react-redux';
import Formsy from 'formsy-react';
import { requestCreateUserAccount } from '../redux/actions/signupActions';

const Signup = ({ requestCreateUserAccount }) => {

    let [ username, setUsername ] = useState('');
    let [ password, setPassword ] = useState('');

    function submitForm() {
        if (username.length > 2 && password.length > 4) {
            requestCreateUserAccount(username, password);
        }
    }

    function usernameChange(e) {
        setUsername(e.target.value);
    }

    function passwordChange(e) {
        setPassword(e.target.value);
    }

    return <div className="card p-3 col-6">
        <h2>
            Complete the following form to create a new account.
        </h2>

        <Formsy onSubmit={submitForm}>
            <label>
                <span>User Name</span>
                <input
                    type="text"
                    placeholder="username"
                    name="username"
                    className="form-control mt-2"
                    onChange={usernameChange}
                    value={username}
                />
            </label>
            <label>
                <span>Password</span>
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="form-control mt-2"
                    onChange={passwordChange}
                    value={password}
                />
            </label>

            {/*{authenticated == mutations.USERNAME_RESERVED ? <p>A user by that name already exists.</p> : null}*/}
            <button type="submit" className="form-control mt-2 btn btn-primary">Sign Up</button>
        </Formsy>

    </div>
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => {
    return {
        requestCreateUserAccount: (username, password) => dispatch(requestCreateUserAccount(username, password))
    };
};

const ConnectedSignup = connect(mapStateToProps, mapDispatchToProps)(Signup);

export default ConnectedSignup;