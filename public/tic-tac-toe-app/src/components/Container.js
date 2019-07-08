import React, {useState} from "react";
import SquareDisplay from "./SquareDisplay";
import Message from "./Message";
import FixedSidebar from "../../../shared-components/FixedSidebar/FixedSidebar";
import winningCombos from "../common/winningCombos";
import _ from "lodash";

const useGameState = () => {
    const [turn, setTurn] = useState(true);
    const [clickedNumsArray] = useState([]);
    const [xArray] = useState([]);
    const [oArray] = useState([]);
    const [gameOver, setGameOver] = useState({});

    return { turn, setTurn, clickedNumsArray, xArray, oArray, gameOver, setGameOver };
};

const Container = (props) => {

    const {
        turn, setTurn, clickedNumsArray, xArray, oArray, gameOver, setGameOver
    } = useGameState();

    function calculateWinner(arr) {

        return _.find(winningCombos, function(combo) {
            return _.intersection(arr, combo).length === 4;
        });
    }

    const winningPosition = (arr) => {
        return calculateWinner(arr);
    };

    const turnClick = (num, turn) => {
        if (clickedNumsArray.includes(num) || gameOver.isGameOver) {
            return;
        }
        clickedNumsArray.push(num);
        if (turn) {
            xArray.push(num);
            if (xArray.length >= 4 && winningPosition(xArray)) {
                return (setGameOver({isGameOver: true, winner: 'Player X'}));
            }
        } else {
            oArray.push(num);
            if (oArray.length >= 4 && winningPosition(oArray)) {
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

export default Container;