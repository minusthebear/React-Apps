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

    const getTicTacToeRowClassNames = (squareId) => {
        return "tic-tac-toe-row tic-tac-toe-row-" + getRowId(squareId);
    }

    function getRowId(squareId) {
        switch (squareId) {
            case squareId >= 1 && squareId < 4:
                return "1";
            case squareId >= 4 && squareId < 7:
                return "2";
            case squareId >= 4 && squareId < 9:
                return "3";
        }
    }

    return (
        <>
            <div className="tic-tac-toe-container">
                <div className="tic-tac-toe-table">
                    <div className="tic-tac-toe-row tic-tac-toe-row-1">
                        <Square  key={1}
                                 number={1}
                                 turn={props.turn}
                                 onClick={props.onClick}
                                 bgColor={bgColor(1)}
                        />
                        <Square  key={2}
                                 number={2}
                                 turn={props.turn}
                                 onClick={props.onClick}
                                 bgColor={bgColor(2)}
                        />
                        <Square  key={3}
                                 number={3}
                                 turn={props.turn}
                                 onClick={props.onClick}
                                 bgColor={bgColor(3)}
                        />
                        <Square  key={4}
                                 number={4}
                                 turn={props.turn}
                                 onClick={props.onClick}
                                 bgColor={bgColor(4)}
                        />
                    </div>
                    <div className="tic-tac-toe-row tic-tac-toe-row-2">
                        <Square  key={5}
                                 number={5}
                                 turn={props.turn}
                                 onClick={props.onClick}
                                 bgColor={bgColor(5)}
                        />
                        <Square  key={6}
                                 number={6}
                                 turn={props.turn}
                                 onClick={props.onClick}
                                 bgColor={bgColor(6)}
                        />
                        <Square  key={7}
                                 number={7}
                                 turn={props.turn}
                                 onClick={props.onClick}
                                 bgColor={bgColor(7)}
                        />
                        <Square  key={8}
                                 number={8}
                                 turn={props.turn}
                                 onClick={props.onClick}
                                 bgColor={bgColor(8)}
                        />
                    </div>
                    <div className="tic-tac-toe-row tic-tac-toe-row-3">
                        <Square  key={9}
                                 number={9}
                                 turn={props.turn}
                                 onClick={props.onClick}
                                 bgColor={bgColor(9)}
                        />
                        <Square  key={10}
                                 number={10}
                                 turn={props.turn}
                                 onClick={props.onClick}
                                 bgColor={bgColor(10)}
                        /><Square  key={11}
                                   number={11}
                                   turn={props.turn}
                                   onClick={props.onClick}
                                   bgColor={bgColor(11)}
                    />
                        <Square  key={12}
                                 number={12}
                                 turn={props.turn}
                                 onClick={props.onClick}
                                 bgColor={bgColor(12)}
                        />
                    </div>
                    <div className="tic-tac-toe-row tic-tac-toe-row-4">
                        <Square  key={13}
                                 number={13}
                                 turn={props.turn}
                                 onClick={props.onClick}
                                 bgColor={bgColor(13)}
                        />
                        <Square  key={14}
                                 number={14}
                                 turn={props.turn}
                                 onClick={props.onClick}
                                 bgColor={bgColor(14)}
                        />
                        <Square  key={15}
                                 number={15}
                                 turn={props.turn}
                                 onClick={props.onClick}
                                 bgColor={bgColor(15)}
                        />
                        <Square  key={16}
                                 number={16}
                                 turn={props.turn}
                                 onClick={props.onClick}
                                 bgColor={bgColor(16)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

const winningCombos = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16],
    [1,5,9,13],
    [1,6,11,16],
    [2,6,10,14],
    [3,7,11,15],
    [4,8,12,16],
    [4,7,10,13]
];


function calculateWinner(arr) {
    return _.find(winningCombos, function(combo) {
        return _.intersectionWith(arr, combo).length === 4;
    });
}

const winningPosition = (arr) => {
    if (calculateWinner(arr)) {
        return true;
    };
    return false;
};

const getInfo = (elm) => {
    console.log(elm);
    return "3.5rem";
}

const Square = (props) => {

    const elementContainer = () => {
        if (props.bgColor === '#FF0000') {
            return (
                <div className="xoBox redBox" style={{ "fontSize": getInfo(this) }}>
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
        <div onClick={clickedSquare} className="tic-tac-toe-square">
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
        <>
            <div className="container">
                <SquareDisplay clickedNumsArray={clickedNumsArray}
                               xArray={xArray}
                               oArray={oArray}
                               turn={turn}
                               onClick={turnClick}
                />
                <Message startNewGame={props.startNewGame} gameOver={gameOver} />
            </div>
            <FixedSidebar/>
        </>
    );

};

const mapStateToProps = (state) => state;

const ConnectedApp = connect(mapStateToProps, null)(App);

export default ConnectedApp;
