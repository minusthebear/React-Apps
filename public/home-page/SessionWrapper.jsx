import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkSession } from '../redux/actions/sessionActions';
import { loginSuccessful } from '../redux/actions/loginActions';
import App from "./App";
import cookie from "react-cookies";

class SessionWrapper extends Component {

    constructor(props) {
        super(props);

        this.state = {
            receivedAuth: false
        }
    }

    componentWillMount() {

        let cke = cookie.load('sid');

        if (this.props.user && this.props.user.authenticated && cke) {
            this.setState({
                receivedAuth: true
            });
            return;
        }

        if (!cke) {
            this.setState({
                receivedAuth: true
            });
            return;
        }

        checkSession().then((res) => {
            if (res.auth && res.data) {
                this.props.loginSuccessful(res.data);
            }
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            this.setState({
                receivedAuth: true
            });
        });
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
        loginSuccessful: (data) => dispatch(loginSuccessful(data))
    };
};

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(SessionWrapper);

export default connectedApp;


// This is a comment for a test commit

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

