import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css'
import './index.scss';
import _ from 'lodash';
import { connect } from 'react-redux';
import FixedSidebar from "../../shared-components/FixedSidebar/FixedSidebar";

const SquareDisplay = (props) => {
    const range = (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i);

    const bgColor = (squareId) => {
        if (!props.clickedNumsArray.includes(squareId)) {
            return '#FFFFFF';
        }
        return props.xArray.includes(squareId) ? '#FF0000' : '#00FF00';
    };

    return (
        <>
            <div className="tic-tac-toe-container">
                {range(1,9).map(squareId =>
                    <Square  key={squareId}
                             number={squareId}
                             turn={props.turn}
                             onClick={props.onClick}
                             bgColor={bgColor(squareId)}
                    />
                )}
                <FixedSidebar/>
            </div>
        </>
    );
};

const winningCombos = [
    [1,2,3],
    [1,5,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [3,5,7],
    [4,5,6],
    [7,8,9]
];


function calculateWinner(arr) {
    return _.find(winningCombos, function(combo) {
        return _.intersectionWith(arr, combo).length === 3;
    });
}

const winningPosition = (arr) => {
    if (calculateWinner(arr)) {
        return true;
    };
    return false;
};

const Square = (props) => {

    const elementContainer = () => {
        if (props.bgColor === '#FF0000') {
            return (
                <div className="xoBox redBox">
                  <span className="xMarks">X</span>
                </div>
            );
        } else if (props.bgColor === '#00FF00') {
            return (
                <div className="xoBox greenBox">
                  <span className="oMarks">O</span>
                </div>
            );
        } else {
            return;
        }
    }

    const clickedSquare = () => {
        props.onClick(props.number, props.turn);
    }

    return (
        <div onClick={clickedSquare}
             className="tic-tac-toe-square">
                 { elementContainer() }
        </div>
    );
};

const Message = (props) => {
    return (
        <div className="tic-tac-toe-message">
            {props.gameOver.isGameOver ? (
                <>
                    <div className="game-over-message">
                        <p>Game Over!</p>
                        {props.gameOver.winner ? (<p>{props.gameOver.winner} wins!</p>) : (<></>)}
                    </div>
                    <button onClick={props.startNewGame} className="game-over-button">Play Again?</button>
                </>
            ) : (<></>)}
        </div>
    );
};

const useGameState = () => {
    const [turn, setTurn] = useState(true);
    const [clickedNumsArray] = useState([]);
    const [xArray] = useState([]);
    const [oArray] = useState([]);
    const [gameOver, setGameOver] = useState({});

    return { turn, setTurn, clickedNumsArray, xArray, oArray, gameOver, setGameOver };
};

const App = () => {
    const [gameId, setGameId] = useState(1);
    return <Container key={gameId} startNewGame={() => setGameId(gameId + 1) } />;
};

const Container = (props) => {

    const {
        turn, setTurn, clickedNumsArray, xArray, oArray, gameOver, setGameOver
    } = useGameState();

    const turnClick = (num, turn) => {
        if (clickedNumsArray.includes(num) || gameOver.isGameOver) {
            return;
        }
        clickedNumsArray.push(num);
        if (turn) {
            xArray.push(num);
            if (xArray.length >= 3 && winningPosition(xArray)) {
                return (setGameOver({isGameOver: true, winner: 'Player X'}));
            }
        } else {
            oArray.push(num);
            if (oArray.length >= 3 && winningPosition(oArray)) {
                return (setGameOver({isGameOver: true, winner: 'Player O'}));
            }
        }
        if (clickedNumsArray.length === 9) {
            return (setGameOver({isGameOver: true, winner: null }));
        }
        setTurn(!turn);
    };

    return (
      <div className="container">
        <SquareDisplay clickedNumsArray={clickedNumsArray}
                       xArray={xArray}
                       oArray={oArray}
                       turn={turn}
                       onClick={turnClick}
        />
        <Message startNewGame={props.startNewGame} gameOver={gameOver} />
      </div>
    );

};

const mapStateToProps = (state) => state;

const ConnectedApp = connect(mapStateToProps, null)(App);

export default ConnectedApp;
