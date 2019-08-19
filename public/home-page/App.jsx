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

function App({ user, setUserSession, checkSession  }){

    let [ userSesh, setUserSesh ] = useState(null);

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

    const renderLogin = () => {
        return <Redirect to="/Login" />;
    }

    return (
        <>
            { console.log('here in this return statement') }
            <Router history={history}>
                <Route exact path="/" render={RouteGuard(Main)} />
                <Route exact path="/Main" render={RouteGuard(Main)}/>
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Signup" component={Signup} />
                <Route exact path="/Quiz" render={RouteGuard(QuizApp)} />
                <Route exact path="/Weather" render={RouteGuard(WeatherApp)} />
                <Route exact path="/Tic-tac-toe" render={RouteGuard(TicTacToeApp)} />
                <Route exact path="/Settings" render={RouteGuard(Settings)} />
            </Router>
        </>
    );
}

const mapStateToProps = state => {
    return { user: state.sessionReducer }
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default connectedApp;


// This is a comment for a test commit

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

