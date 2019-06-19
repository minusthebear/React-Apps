import {resetState, resetCorrectAnswer } from "./helperMethods";
import './index.scss';
import './bootstrap.min.css';
import MainGrid from "./MainGrid";
import QuestionAnswer from "./QuestionAnswer/QuestionAnswer";
import Scoreboard from "./Scoreboard/Scoreboard";
import React, {useState, useEffect} from "react";
import { intersection } from 'lodash'
import GutsyWager from "./GutsyWager/GutsyWager";

function GamePlay(props) {

    const { categories, quizGrid, scorecard, numPlayers, gutsyWager } = props;

    let [ category, setCategory ] = useState(null);
    let [ correctAnswer, setCorrectAnswer ] = useState(resetCorrectAnswer());
    let [ grid, setGrid ] = useState(quizGrid);
    let [ player, setPlayer ] = useState(0);
    let [ playerPoints ] = useState(scorecard);
    let [ points, setPoints ] = useState(0);
    let [ questionAnswer, setQuestionAnswer ] = useState({});
    let [ questionState, setQuestionState ] = useState(resetState(category, questionAnswer));
    let [ showButton, setShowButton ] = useState(false);
    let [ showMainGrid, setShowMainGrid ] = useState(true);
    let [ hitBonus, setHitBonus ] = useState(false);

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

        if (!hitBonus) {
            quizGrid[category][points] = true;
            setGrid(quizGrid);
        }

        if (gutsyWager.indexOf(questionAnswer) > -1 && !hitBonus) {
            setHitBonus(true);
            setQuestionAnswer(questionAnswer);
            setCategory(category);
        } else {
            resetCatAndAnswer(category, questionAnswer, points);
            setShowMainGrid(false);
        }
    };

    const resetCatAndAnswer = (category, questionAnswer, points) => {
        setCategory(category);
        setQuestionAnswer(questionAnswer);
        setPoints(points);
        setShowButton(false);
        setQuestionState(resetState(category, questionAnswer));
        setCorrectAnswer(resetCorrectAnswer());
        setHitBonus(false);
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

    const questionAnswerScreen = () => {
        return (<QuestionAnswer {...questionState}
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
        />);
    };

    const gutsyWagerScreen = () => {
        return <GutsyWager questionAnswer={questionAnswer}
                           maxAmount={playerPoints[player].score}
                           selectQuestionAnswer={selectQuestionAnswer}
                           category={category}
        />;
    };

    const checkIfBonus = () => {
        return hitBonus ? gutsyWagerScreen() : mainGridScreen();
    };

    const mainGridScreen = () => {
        return (<MainGrid categories={categories}
                          baseValue={baseValue}
                          quizGrid={grid}
                          selectQuestionAnswer={selectQuestionAnswer}
        />);
    };

    return  (
        <div className="container-fluid">
            <div className={ showMainGrid ? 'game-play-container' : 'question-answer-container'}>
                { showMainGrid
                    ? checkIfBonus()
                    : questionAnswerScreen()
                }
                {
                    hitBonus
                        ? null
                        : (
                            <div className="table-container">
                                <Scoreboard totalPoints={playerPoints} player={player} showMainGrid={showMainGrid} />
                            </div>
                        )
                }
            </div>
        </div>
    );
}

export default GamePlay;