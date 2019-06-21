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
import { Redirect } from 'react-router';
import { setUserSession } from '../redux/actions/sessionActions';

function App({ user }){

    useEffect(() => {
        try {
            let userSesh = localStorage.getItem('MatthewHamannReactApp');

            console.log(userSesh);

            if (userSesh) {
                setUserSession(JSON.parse(userSesh));
            }

            console.log(user);
        } catch(e) {
            renderLogin();
        }
    });

    const RouteGuard = Component => ({match}) =>  {
        return <Component match={match}/>;
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
    );
}

const mapStateToProps = state => {
    return { user: state.sessionReducer.user}
};

const mapDispatchToProps = dispatch => {
    return { setUserSession: (sesh) => dispatch(setUserSession(sesh)) };
};

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default connectedApp;


// This is a comment for a test commit

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

