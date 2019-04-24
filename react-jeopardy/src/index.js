import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QuestionAnswer from './QuestionAnswer';
import MainGrid from './MainGrid';
import ScoreBoard from './ScoreBoard';
import * as serviceWorker from './serviceWorker';
import { getAllQuestions, writeQuizGrid, resetState, createScoreCard } from './helperMethods';


/* TODO: change App, maybe MainGrid and maybe QuestionAnswer into class components */

function App({categories, quizGrid, scoreCard}) {
    let [ player, setPlayer ] = useState(0);
    let [ playerPoints ] = useState(scoreCard);
    let [ category, setCategory ] = useState(null);
    let [ questionAnswer, setQuestionAnswer ] = useState({});
    let [ grid, setGrid ] = useState(quizGrid);

    let [bgColor, setBgColor] = useState('white');
    let [showButton, setShowButton] = useState(false);
    let [showMainGrid, setShowMainGrid] = useState(true);
    let [questionState, setQuestionState] = useState(resetState(category, questionAnswer));
    let [points, setPoints] = useState(0);

    const setPlayerFunc = (player) => {
        player === 2 ? setPlayer(0) : setPlayer(player + 1);
    };

    const selectAnswer = (answer, points, player) => {

        if (getAnswer(answer)) {
            setBgColor('green');
            playerPoints[player] += points;
        } else {
            setBgColor('red');
            playerPoints[player] -= points;
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
        <div>
            { showMainGrid
                ? (<MainGrid categories={categories}
                             player={player}
                             selectQuestionAnswer={selectQuestionAnswer}
                             baseValue={baseValue}
                             quizGrid={grid}
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
            <ScoreBoard totalPoints={playerPoints} player={player} showMainGrid={showMainGrid} />

        </div>
    );
}

function render() {

    const categories = getAllQuestions(),
          quizGrid = writeQuizGrid(categories),
          scoreCard = createScoreCard();

    ReactDOM.render(
            <Fragment>
                <App categories={categories} quizGrid={quizGrid} scoreCard={scoreCard} />
            </Fragment>
        , document.getElementById('root')
    );
}


render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
