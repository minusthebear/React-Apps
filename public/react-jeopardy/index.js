import React, { useState, useEffect } from 'react';
import './index.scss';
import GamePlay from './GamePlay';
import SetGamePlayValues from './GamePlaySetup/SetGamePlayValues';
import SettingsPage from '../settings/Settings';
import { getAllCategories } from '../redux/actions/quizActions';
import FixedSidebar from '../shared-components/FixedSidebar/FixedSidebar';
import { getAllQuestions, writeQuizGrid, createScoreCard, getGutsyWagerQuestions } from './helperMethods';
import { connect } from 'react-redux';
import NewCategoryOrAnswer from "./NewCategoryOrAnswer/NewCategoryOrAnswer";

/* TODO: change App, maybe MainGrid and maybe QuestionAnswer into class components */

function App({ getAllCategories, allQuestionData }) {

    useEffect(() => {
        getAllCategories();
        console.log(allQuestionData);
    }, []);

    let [ allValuesAreSet, setAllValuesAreSet ] = useState(false);
    let [ categories, setCategories ] = useState({});
    let [ quizGrid, setQuizGrid ] = useState({});
    let [ scorecard, setScorecard ] = useState({});
    let [ numPlayers, setNumPlayers ] = useState(0);
    let [ gutsyWager, setGutsyWager ] = useState({});


    const setAllValues = (obj) => {
        if (obj) {
            let temp = getAllQuestions(allQuestionData, parseInt(obj.settings.categories));
            setNumPlayers(parseInt(obj.settings.numPlayers));
            setCategories(temp);
            setQuizGrid(writeQuizGrid(temp));
            setScorecard(createScoreCard(obj.players));
            setGutsyWager(getGutsyWagerQuestions(temp));
            setAllValuesAreSet(true);
        }
    };

    const chooseFeature = (str) => {
        switch (str) {
            case 'category':
                break;
            case 'answer':
                break;
            case 'field':
                break;
        }
    };

    const gamePlayContainer = () => {
        return <NewCategoryOrAnswer allQuestionData={allQuestionData} />
        // return allValuesAreSet
        //     ?
        //     <GamePlay categories={categories} quizGrid={quizGrid} scorecard={scorecard} numPlayers={numPlayers} gutsyWager={gutsyWager} />
        //     :
        //     <SetGamePlayValues setValues={setAllValues}/>
    };

    const showSettingsPage = () => {
        return <SettingsPage />;
    };

    return (
        <>
            {
                gamePlayContainer()
            }
            <FixedSidebar  />
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
