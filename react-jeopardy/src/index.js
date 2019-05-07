import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import GamePlay from './GamePlay';
import * as serviceWorker from './serviceWorker';
import SetGamePlayValues from './GamePlaySetup/SetGamePlayValues';
import { getAllQuestions, writeQuizGrid, createScoreCard, getGutsyWagerQuestions } from './helperMethods';


/* TODO: change App, maybe MainGrid and maybe QuestionAnswer into class components */

function App() {

    //NOTE: Dummy data setup
    // const dummyData = {"settings":{"categories":"1","numPlayers":"4"},"players":["Steve","Jenna","Nick","Jaclyn"]};
    // let temp = getAllQuestions(parseInt(dummyData.settings.categories));
    // let [ categories, setCategories ] = useState(temp);
    // let [ quizGrid, setQuizGrid ] = useState(writeQuizGrid(temp));
    // let [ scorecard, setScorecard ] = useState(createScoreCard(dummyData.players));
    // let [ numPlayers, setNumPlayers ] = useState(parseInt(dummyData.settings.numPlayers));
    // let [ gutsyWager, setGutsyWager ] = useState(getGutsyWagerQuestions(temp));

    //
    let [ allValuesAreSet, setAllValuesAreSet ] = useState(false);
    let [ categories, setCategories ] = useState({});
    let [ quizGrid, setQuizGrid ] = useState({});
    let [ scorecard, setScorecard ] = useState({});
    let [ numPlayers, setNumPlayers ] = useState(0);
    let [ gutsyWager, setGutsyWager ] = useState({});


    const setAllValues = (obj) => {
        if (obj) {
            let temp = getAllQuestions(parseInt(obj.settings.categories));
            setNumPlayers(parseInt(obj.settings.numPlayers));
            setCategories(temp);
            setQuizGrid(writeQuizGrid(temp));
            setScorecard(createScoreCard(obj.players));
            setGutsyWager(getGutsyWagerQuestions(temp));
            setAllValuesAreSet(true);
        }
    };

    // setAllValues(dummyData);

    return (
        <>

            {allValuesAreSet
                ?
                <GamePlay categories={categories} quizGrid={quizGrid} scorecard={scorecard} numPlayers={numPlayers} gutsyWager={gutsyWager} />
                :
                <SetGamePlayValues setValues={setAllValues}/>
            }
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
