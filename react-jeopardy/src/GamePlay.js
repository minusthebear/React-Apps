import {resetState, resetCorrectAnswer } from "./helperMethods";
import './index.scss';
import './bootstrap.min.css';
import MainGrid from "./MainGrid";
import QuestionAnswer from "./questionAnswer/QuestionAnswer";
import Scoreboard from "./scoreboard/Scoreboard";
import React, {useState, useEffect} from "react";
import { intersection } from 'lodash'

function GamePlay(props) {

    const {categories, quizGrid, scorecard, numPlayers} = props;

    let [ player, setPlayer ] = useState(0);
    let [ playerPoints ] = useState(scorecard);
    let [ category, setCategory ] = useState(null);
    let [ questionAnswer, setQuestionAnswer ] = useState({});
    let [ grid, setGrid ] = useState(quizGrid);
    let [showButton, setShowButton] = useState(false);
    let [showMainGrid, setShowMainGrid] = useState(true);
    let [questionState, setQuestionState] = useState(resetState(category, questionAnswer));
    let [points, setPoints] = useState(0);
    let [correctAnswer, setCorrectAnswer] = useState(resetCorrectAnswer());

    const setPlayerFunc = (player) => {
        player === (numPlayers - 1) ? setPlayer(0) : setPlayer(player + 1);
    };

    const selectAnswer = (answer, points, player) => {
        let ansr = getAnswer(answer);
        setCorrectAnswer(ansr);
        ansr.isCorrect ? playerPoints[player].score += points : playerPoints[player].score -= points;
        setShowButton(true);
    };

    const baseValue = 100;

    const selectQuestionAnswer = (category, questionAnswer, points) => {
        resetCatAndAnswer(category, questionAnswer, points);
        quizGrid[category][points] = true;
        setGrid(quizGrid);
        setShowMainGrid(false);
        console.log(questionAnswer);
    };

    const resetCatAndAnswer = (category, questionAnswer, points) => {
        setCategory(category);
        setQuestionAnswer(questionAnswer);
        setPoints(points);
        setShowButton(false);
        setQuestionState(resetState(category, questionAnswer));
        setCorrectAnswer(resetCorrectAnswer());
    };

    const getAnswer = (answer) => {
        let type = questionAnswer.type,
            subject = questionAnswer.subject,
            allAnswers = questionAnswer.answers,
            correctAnswer = {};

        correctAnswer.answer = answer;

        if (typeof subject[type] === 'string') {
            correctAnswer.isCorrect = subject[type] === answer;
            correctAnswer.correctAnswer = subject[type];
        } else if (Array.isArray(subject[type])) {
            correctAnswer.isCorrect = subject[type].some((ans) => ans === answer);
            correctAnswer.correctAnswer = intersection(subject[type], allAnswers)[0];
        } else {
            correctAnswer.isCorrect = false;
            correctAnswer.correctAnswer = null;
        }
        return correctAnswer;
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
                                       points={points}
                                       selectAnswer={selectAnswer}
                                       showButton={showButton}
                                       player={player}
                                       correctAnswer={correctAnswer}
                                       showNextQuestion={() => {
                                           resetCatAndAnswer(null, {}, 0);
                                           setShowMainGrid(true);
                                           setPlayerFunc(player);
                                       }}
                    />)
                }
            </div>
            <div className="table-container">
                <Scoreboard totalPoints={playerPoints} player={player} showMainGrid={showMainGrid} />
            </div>

        </div>
    );
}

export default GamePlay;