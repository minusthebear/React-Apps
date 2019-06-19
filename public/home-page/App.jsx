import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router-dom';
import configureStore from '../redux/store';
import {history} from '../redux/history';
import WeatherApp from '../weather-app/components/App';
import QuizApp from '../react-jeopardy';
import TicTacToeApp from '../tic-tac-toe-app/src/App';
import Login from '../login/Login';
import Signup from '../login/Signup';
import Main from './Main';
import { Redirect } from 'react-router';

const RouteGuard = Component => ({match}) => (
    // !store.getState().session.authenticated ?
    console.log(match) && false ? <Redirect to="/"/> : <Component match={match}/>
);

const MainGuard = Component => ({match}) => (
    true ? <Redirect to="/login"/> : <Redirect to="/main"/>
);

const store = configureStore();

export default function App(){
    return (
        <Router history={history}>
            <Provider store={store}>
                {/*<Route exact path="/" component={ConnectedLogin} />*/}

                <Route exact path="/" render={MainGuard(Main)} />
                <Route exact path="/main" render={RouteGuard(Main)}/>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/Quiz" render={RouteGuard(QuizApp)} />
                <Route exact path="/Weather" render={RouteGuard(WeatherApp)} />
                <Route exact path="/Tic-tac-toe" render={RouteGuard(TicTacToeApp)} />
            </Provider>
        </Router>
    );
}

// This is a comment for a test commit

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

