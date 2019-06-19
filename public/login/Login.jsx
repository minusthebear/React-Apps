import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Login = (props)=>(
    <div className="card p-3 col-6">
        <h2>
            Please login
        </h2>
        <h3>
            <Link to="/signup">
                Don't have an account? Sign up.
            </Link>
        </h3>
        <form onSubmit={() => {}}>
            <input type="text" placeholder="username" name="username" defaultValue="Dev" className="form-control"/>
            <input type="password" placeholder="password" name="password" defaultValue="TUPLES" className="form-control mt-2"/>
            {/*{authenticated === mutations.NOT_AUTHENTICATED ?*/}
            {/*    <p>*/}
            {/*        Login incorrect.*/}
            {/*    </p> : null*/}
            {/*}*/}
            <button type="submit" className="form-control mt-2 btn btn-primary">
                Login
            </button>
        </form>
    </div>
);

const mapStateToProps = state => state;
const ConnectedLogin = connect(mapStateToProps, null)(Login);

export default ConnectedLogin;