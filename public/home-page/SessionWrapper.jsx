import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserSession, checkSession } from '../redux/actions/sessionActions';
// import { requireAuthentication } from '../requireAuthentication';

const URL = 'http://localhost:8080';

class SessionWrapper extends Component {

    constructor() {
        super();
        console.log(this.state);
        console.log(this.props);
    }

    componentWillMount() {

    }

    render () {
        return (
            <></>
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

