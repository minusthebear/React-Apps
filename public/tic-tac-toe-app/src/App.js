import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css'
import './index.scss';
import _ from 'lodash';
import { connect } from 'react-redux';
import FixedSidebar from "../../shared-components/FixedSidebar/FixedSidebar";

const SquareDisplay = (props) => {
    const range = (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i);

    return (
        <>
            <div className="tic-tac-toe-container">
                <SquareRow {...props} level={'A'} />
                <SquareRow {...props} level={'B'} />
                <SquareRow {...props} level={'C'} />
                <SquareRow {...props} level={'D'} />
            </div>
        </>
    );
};

const SquareRow = (props) => {

    const bgColor = (squareId) => {
        if (!props.clickedNumsArray.includes(squareId)) {
            return '#FFFFFF';
        }
        return props.xArray.includes(squareId) ? '#FF0000' : '#00FF00';
    };

    return (
        <div className="tic-tac-toe-table">
            <div className="tic-tac-toe-row tic-tac-toe-row-1">
                <Square  key={1 + props.level}
                         number={1 + props.level}
                         turn={props.turn}
                         onClick={props.onClick}
                         bgColor={bgColor(1 + props.level)}
                />
                <Square  key={2 + props.level}
                         number={2 + props.level}
                         turn={props.turn}
                         onClick={props.onClick}
                         bgColor={bgColor(2 + props.level)}
                />
                <Square  key={3 + props.level}
                         number={3 + props.level}
                         turn={props.turn}
                         onClick={props.onClick}
                         bgColor={bgColor(3 + props.level)}
                />
                <Square  key={4 + props.level}
                         number={4 + props.level}
                         turn={props.turn}
                         onClick={props.onClick}
                         bgColor={bgColor(4 + props.level)}
                />
            </div>
            <div className="tic-tac-toe-row tic-tac-toe-row-2">
                <Square  key={5 + props.level}
                         number={5 + props.level}
                         turn={props.turn}
                         onClick={props.onClick}
                         bgColor={bgColor(5 + props.level)}
                />
                <Square  key={6 + props.level}
                         number={6 + props.level}
                         turn={props.turn}
                         onClick={props.onClick}
                         bgColor={bgColor(6 + props.level)}
                />
                <Square  key={7 + props.level}
                         number={7 + props.level}
                         turn={props.turn}
                         onClick={props.onClick}
                         bgColor={bgColor(7 + props.level)}
                />
                <Square  key={8 + props.level}
                         number={8 + props.level}
                         turn={props.turn}
                         onClick={props.onClick}
                         bgColor={bgColor(8 + props.level)}
                />
            </div>
            <div className="tic-tac-toe-row tic-tac-toe-row-3">
                <Square  key={9 + props.level}
                         number={9 + props.level}
                         turn={props.turn}
                         onClick={props.onClick}
                         bgColor={bgColor(9 + props.level)}
                />
                <Square  key={10 + props.level}
                         number={10 + props.level}
                         turn={props.turn}
                         onClick={props.onClick}
                         bgColor={bgColor(10 + props.level)}
                /><Square  key={11 + props.level}
                           number={11 + props.level}
                           turn={props.turn}
                           onClick={props.onClick}
                           bgColor={bgColor(11 + props.level)}
            />
                <Square  key={12 + props.level}
                         number={12 + props.level}
                         turn={props.turn}
                         onClick={props.onClick}
                         bgColor={bgColor(12 + props.level)}
                />
            </div>
            <div className="tic-tac-toe-row tic-tac-toe-row-4">
                <Square  key={13 + props.level}
                         number={13 + props.level}
                         turn={props.turn}
                         onClick={props.onClick}
                         bgColor={bgColor(13 + props.level)}
                />
                <Square  key={14 + props.level}
                         number={14 + props.level}
                         turn={props.turn}
                         onClick={props.onClick}
                         bgColor={bgColor(14 + props.level)}
                />
                <Square  key={15 + props.level}
                         number={15 + props.level}
                         turn={props.turn}
                         onClick={props.onClick}
                         bgColor={bgColor(15 + props.level)}
                />
                <Square  key={16 + props.level}
                         number={16 + props.level}
                         turn={props.turn}
                         onClick={props.onClick}
                         bgColor={bgColor(16 + props.level)}
                />
            </div>
        </div>
    );
}

const winningCombos = [
    ['1A','2A','3A','4A'],
    ['5A','6A','7A','8A'],
    ['9A','10A','11A','12A'],
    ['13A','14A','15A','16A'],
    ['1A','5A','9A','13A'],
    ['1A','6A','11A','16A'],
    ['2A','6A','10A','14A'],
    ['3A','7A','11A','15A'],
    ['4A','8A','12A','16A'],
    ['4A','7A','10A','13A'],

    ['1B','2B','3B','4B'],
    ['5B','6B','7B','8B'],
    ['9B','10B','11B','12B'],
    ['13B','14B','15B','16B'],
    ['1B','5B','9B','13B'],
    ['1B','6B','11B','16B'],
    ['2B','6B','10B','14B'],
    ['3B','7B','11B','15B'],
    ['4B','8B','12B','16B'],
    ['4B','7B','10B','13B'],

    ['1C','2C','3C','4C'],
    ['5C','6C','7C','8C'],
    ['9C','10C','11C','12C'],
    ['13C','14C','15C','16C'],
    ['1C','5C','9C','13C'],
    ['1C','6C','11C','16C'],
    ['2C','6C','10C','14C'],
    ['3C','7C','11C','15C'],
    ['4C','8C','12C','16C'],
    ['4C','7C','10C','13C'],

    ['1D','2D','3D','4D'],
    ['5D','6D','7D','8D'],
    ['9D','10D','11D','12D'],
    ['13D','14D','15D','16D'],
    ['1D','5D','9D','13D'],
    ['1D','6D','11D','16D'],
    ['2D','6D','10D','14D'],
    ['3D','7D','11D','15D'],
    ['4D','8D','12D','16D'],
    ['4D','7D','10D','13D'],

    ['1A','2B','3C','4D'],
    ['5A','6B','7C','8D'],
    ['9A','10B','11C','12D'],
    ['13A','14B','15C','16D'],
    ['1A','5B','9C','13D'],
    ['1A','6B','11C','16D'],
    ['2A','6B','10C','14D'],
    ['3A','7B','11C','15D'],
    ['4A','8B','12C','16D'],
    ['4A','7B','10C','13D'],

    ['1D','2C','3B','4A'],
    ['5D','6C','7B','8A'],
    ['9D','10C','11B','12A'],
    ['13D','14C','15B','16A'],
    ['1D','5C','9B','13A'],
    ['1D','6C','11B','16A'],
    ['2D','6C','10B','14A'],
    ['3D','7C','11B','15A'],
    ['4D','8C','12B','16A'],
    ['4D','7C','10B','13A']
];


function calculateWinner(arr) {
    return _.find(winningCombos, function(combo) {
        return _.intersection(arr, combo).length === 4;
    });
}

const winningPosition = (arr) => {
    if (calculateWinner(arr)) {
        return true;
    };
    return false;
};


const Square = (props) => {

    const getInfo = () => {
        let elm  = document.getElementById(props.number);
        console.log(elm);
        if (elm && elm.clientHeight) {
            return (elm.clientHeight * .7) + 'px';
        }
        return '1rem';
    }

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
        <div id={props.number} onClick={clickedSquare} className="tic-tac-toe-square" style={{fontSize: getInfo()}}>
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
        if (clickedNumsArray.length === 64) {
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
