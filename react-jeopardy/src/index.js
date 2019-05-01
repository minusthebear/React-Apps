import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GamePlay from './GamePlay';
import * as serviceWorker from './serviceWorker';
import SetGamePlayValues from './SetGamePlayValues';
import { getAllQuestions, writeQuizGrid, createScoreCard } from './helperMethods';


/* TODO: change App, maybe MainGrid and maybe QuestionAnswer into class components */

function App() {
    let [ allValuesAreSet, setAllValuesAreSet ] = useState(false);
    // let [ categories, setCategories ] = useState({});
    // let [ quizGrid, setQuizGrid ] = useState({});
    // let [ scoreCard, setScoreCard ] = useState({});



    const categories = getAllQuestions(),
        quizGrid = writeQuizGrid(categories),
        scoreCard = createScoreCard();

    return (
        <>
            {/*<GamePlay categories={categories} quizGrid={quizGrid} scoreCard={scoreCard} />*/}
            {/*{ allValuesAreSet ?*/}
            {/*    false :*/}
                <SetGamePlayValues />
        </>
    );
}

// <GamePlay categories={categories} quizGrid={quizGrid} scoreCard={scoreCard} />

function render() {

    ReactDOM.render(
            <Fragment>
                <App />
            </Fragment>
        , document.getElementById('root')
    );
}


render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
