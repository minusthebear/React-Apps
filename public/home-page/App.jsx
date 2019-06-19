import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router-dom';
import configureStore from '../redux/store';
import {history} from '../redux/history';
import WeatherApp from '../weather-app/components/App';
import QuizApp from '../react-jeopardy';
import TicTacToeApp from '../tic-tac-toe-app/src/App';
import Main from './Main';

const store = configureStore();

export default function App(){
    return (
        <Router history={history}>
            <Provider store={store}>
                {/*<Route exact path="/" component={ConnectedLogin} />*/}

                <Route exact path="/" component={Main} />
                <Route exact path="/quiz" component={QuizApp}/>
                <Route exact path="/weather" component={WeatherApp}/>
                <Route exact path="/tic-tac-toe" component={TicTacToeApp} />
            </Provider>
        </Router>
    );
}

// This is a comment for a test commit

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

