import {resetState} from "./helperMethods";
import MainGrid from "./MainGrid";
import QuestionAnswer from "./questionAnswer/QuestionAnswer";
import Scoreboard from "./scoreboard/Scoreboard";
import React, {useState, useEffect} from "react";

function GamePlay(props) {

    console.log(props);

    const {categories, quizGrid, scorecard, numPlayers} = props;

    let [ player, setPlayer ] = useState(0);
    let [ playerPoints ] = useState(scorecard);
    let [ category, setCategory ] = useState(null);
    let [ questionAnswer, setQuestionAnswer ] = useState({});
    let [ grid, setGrid ] = useState(quizGrid);

    let [bgColor, setBgColor] = useState('white');
    let [showButton, setShowButton] = useState(false);
    let [showMainGrid, setShowMainGrid] = useState(true);
    let [questionState, setQuestionState] = useState(resetState(category, questionAnswer));
    let [points, setPoints] = useState(0);

    const setPlayerFunc = (player) => {
        player === (numPlayers - 1) ? setPlayer(0) : setPlayer(player + 1);
    };

    const selectAnswer = (answer, points, player) => {

        if (getAnswer(answer)) {
            setBgColor('green');
            playerPoints[player].score += points;
        } else {
            setBgColor('red');
            playerPoints[player].score -= points;
        }

        setShowButton(true);
    };

    const baseValue = 100;

    const selectQuestionAnswer = (category, questionAnswer, points) => {
        resetCatAndAnswer(category, questionAnswer, points);
        quizGrid[category][points] = true;
        setGrid(quizGrid);
        setShowMainGrid(false);
    };

    const resetCatAndAnswer = (category, questionAnswer, points) => {
        setCategory(category);
        setQuestionAnswer(questionAnswer);
        setPoints(points);
        setShowButton(false);
        setQuestionState(resetState(category, questionAnswer));
    };

    const getAnswer = (answer) => {
        let type = questionAnswer.type;
        let subject = questionAnswer.subject;

        if (typeof subject[type] === 'string') {
            return subject[type] === answer;
        } else if (Array.isArray(subject[type])) {
            return subject[type].some((ans) => ans === answer);
        }
        return false;
    };

    return  (
        <div className={ showMainGrid ? 'game-play-container' : 'question-answer-container'}>
            <div className="container">
                { showMainGrid
                    ? (<MainGrid categories={categories}
                                 baseValue={baseValue}
                                 quizGrid={grid}
                                 selectQuestionAnswer={selectQuestionAnswer}
                    />)
                    : (<QuestionAnswer {...questionState}
                                       bgColor={bgColor}
                                       points={points}
                                       selectAnswer={selectAnswer}
                                       showButton={showButton}
                                       player={player}
                                       showNextQuestion={() => {
                                           resetCatAndAnswer(null, {}, 0);
                                           setBgColor('white');
                                           setShowMainGrid(true);
                                           setPlayerFunc(player);
                                       }}
                    />)
                }
            </div>
            <div class="table-container">
                <Scoreboard totalPoints={playerPoints} player={player} showMainGrid={showMainGrid} />
            </div>

        </div>
    );
}

export default GamePlay;