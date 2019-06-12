import React, { useState, useEffect } from 'react';
import './index.scss';
import GamePlay from './GamePlay';
import SetGamePlayValues from './GamePlaySetup/SetGamePlayValues';
import { getAllCategories } from './actions/index';
import { getAllQuestions, writeQuizGrid, createScoreCard, getGutsyWagerQuestions } from './helperMethods';
import { connect } from 'react-redux';

/* TODO: change App, maybe MainGrid and maybe QuestionAnswer into class components */

function App({ getAllCategories, allQuestionData }) {

    //NOTE: Dummy data setup
    // const dummyData = {"settings":{"categories":"1","numPlayers":"4"},"players":["Steve","Jenna","Nick","Jaclyn"]};
    // let temp = getAllQuestions(parseInt(dummyData.settings.categories));
    // let [ categories, setCategories ] = useState(temp);
    // let [ quizGrid, setQuizGrid ] = useState(writeQuizGrid(temp));
    // let [ scorecard, setScorecard ] = useState(createScoreCard(dummyData.players));
    // let [ numPlayers, setNumPlayers ] = useState(parseInt(dummyData.settings.numPlayers));
    // let [ gutsyWager, setGutsyWager ] = useState(getGutsyWagerQuestions(temp));

    useEffect(() => {
        getAllCategories();
    }, []);

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
            <button onClick={() => { console.log( allQuestionData )}} >FUCK BUTTON</button>
            
            {allValuesAreSet
                ?
                <GamePlay categories={categories} quizGrid={quizGrid} scorecard={scorecard} numPlayers={numPlayers} gutsyWager={gutsyWager} />
                :
                <SetGamePlayValues setValues={setAllValues}/>
            }
        </>
    );
}


const mapStateToProps = state => {
    return { allQuestionData: state.jeopardyReducer.allQuestionData };
};

function mapDispatchToProps(dispatch) {
    return {
        getAllCategories: () => dispatch(getAllCategories())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
