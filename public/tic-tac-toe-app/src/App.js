import React, { useState, useEffect } from 'react';
import './App.css'
import './index.scss';
import _ from 'lodash';
import { connect } from 'react-redux';
import winningCombos from './common/winningCombos';
import Container from './components/Container';


const App = () => {
    const [gameId, setGameId] = useState(1);
    return <Container key={gameId} startNewGame={() => setGameId(gameId + 1) } />;
};


const mapStateToProps = (state) => state;

const ConnectedApp = connect(mapStateToProps, null)(App);

export default ConnectedApp;
