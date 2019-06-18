import React, { useState, useEffect } from 'react';
import './index.scss';
import GamePlay from './GamePlay';
import SetGamePlayValues from './GamePlaySetup/SetGamePlayValues';
import FixedSidebar from './FixedSidebar/FixedSidebar';
import SettingsPage from './Settings/Settings';
import { getAllCategories } from './actions/index';
import { getAllQuestions, writeQuizGrid, createScoreCard, getGutsyWagerQuestions } from './helperMethods';
import { connect } from 'react-redux';

/* TODO: change App, maybe MainGrid and maybe QuestionAnswer into class components */

function App({ getAllCategories, allQuestionData }) {

    useEffect(() => {
        getAllCategories();
    }, []);

    let [ allValuesAreSet, setAllValuesAreSet ] = useState(false);
    let [ categories, setCategories ] = useState({});
    let [ quizGrid, setQuizGrid ] = useState({});
    let [ scorecard, setScorecard ] = useState({});
    let [ numPlayers, setNumPlayers ] = useState(0);
    let [ gutsyWager, setGutsyWager ] = useState({});
    let [ settingsPage, setSettingsPage ] = useState(false);


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

    const gamePlayContainer = () => {
        return allValuesAreSet
            ?
            <GamePlay categories={categories} quizGrid={quizGrid} scorecard={scorecard} numPlayers={numPlayers} gutsyWager={gutsyWager} />
            :
            <SetGamePlayValues setValues={setAllValues}/>
    };

    const menuSelect = (val) => {
        if (val) {
            switch (val) {
                case 'Settings':
                    setSettingsPage(true);
                    break;
                default:
                    setSettingsPage(false);
            }

        }
    };

    const showSettingsPage = () => {
        return <SettingsPage />;
    };

    return (
        <>
            {
                settingsPage ? showSettingsPage() : gamePlayContainer()
            }
            <FixedSidebar menuSelect={menuSelect} />
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
