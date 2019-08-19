import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserSession, checkSession } from '../redux/actions/sessionActions';
// import { requireAuthentication } from '../requireAuthentication';
import App from "./App";
import cookie from "react-cookies";

const URL = 'http://localhost:8080';

class SessionWrapper extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);

        this.state = {
            receivedAuth: false
        }
    }

    componentWillMount() {

        let cke = cookie.load('sid');

        if (this.props.user && this.props.user.authenticated && cke) {
            console.log('user.authenticated && cke');
            return;
        }

        if (!cke) {
            console.log('!cke');
            return;
        }

        console.log('And here we are....');
        checkSession().then((res) => {
            console.log('checkSession then');
            console.log(res);
        }).catch((err) => {
            console.log('checkSession err');
            console.log(err);
        });
    }

    componentWillUnmount() {

    }

    render () {
        return (
            <>
                { this.state.receivedAuth
                    ?
                    <App />
                    :
                    null
                }
            </>
        );
    }
}

const mapStateToProps = state => {
    return { user: state.sessionReducer }
};

const mapDispatchToProps = dispatch => {
    return {
        setUserSession: (sesh) => dispatch(setUserSession(sesh)),
        checkSession: () => dispatch(checkSession())
    };
};

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(SessionWrapper);

export default connectedApp;


// This is a comment for a test commit

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

