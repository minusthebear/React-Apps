import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Router } from 'react-router-dom';
import {history} from '../redux/history';
import WeatherApp from '../weather-app/components/App';
import QuizApp from '../react-jeopardy';
import TicTacToeApp from '../tic-tac-toe-app/src/App';
import Login from '../login/Login';
import Signup from '../login/Signup';
import Settings from '../settings/Settings';
import Main from './Main';
import cookie from 'react-cookies';
import axios from 'axios';
import store from '../redux/store';
import { Redirect } from 'react-router';
import { setUserSession, checkSession } from '../redux/actions/sessionActions';
// import { requireAuthentication } from '../requireAuthentication';

const URL = 'http://localhost:8080';

class App extends React.Component({ user, setUserSession, checkSession  }){

    //

    constructor() {
        super();
        this.user = user;
    }


    useEffect(() => {

        let cke = cookie.load('sid');

        if (user.authenticated && cke) {
            console.log('user.authenticated && cke');
            return;
        }

        if (!cke) {
            console.log('!cke');
            return;
        }

        async function init() {
            await checkSession(cke);

            console.log('after checkSession');
        }
        init();
    }, []);


    const RouteGuard = Component => ({match}) =>  {
        console.log("store.getState()", user);
        console.log("Route guard", match);

        console.log("cookie sid", cookie.load('sid'));

        if (!user.authenticated) {
            // TODO: Obviously this doesn't go here, move soon
            let x = cookie.load('sid');
            console.log('cookie', x);

            return renderLogin();
        } else {
            return <Component match={match}/>;
        }
        // console.log(localStorage.getItem('MatthewHamannReactApp'));
        //
        // console.log(user);
        // return (
        //     user ? <Component match={match}/> : <Redirect to="/Login"/>
        // )
    };



    render() {
        return (
            <App/>
        );
    };


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

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default connectedApp;


// This is a comment for a test commit

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

