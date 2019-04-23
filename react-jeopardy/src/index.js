import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QuestionAnswer from './QuestionAnswer';
import MainGrid from './MainGrid';
import ScoreBoard from './ScoreBoard';
import { shuffle, sample, pluck } from 'underscore';
import * as serviceWorker from './serviceWorker';
import { music, books, directors, nations } from './question-data';

const shuffleAllArrayValues = (category, format, fourValues) => {

    const fourRandomValues = fourValues.reduce(function(av, cv) {
        return getSingleValue(fourValues, av, cv, format);
    }, []);
    const answer = sample(fourRandomValues);

    return {
        type: format,
        answers: fourRandomValues,
        subject: category.find((value) => value[format].some(title => title === answer)),
        extra: null
    };
};

// For getting songs
function getSingleValue(fourValues, av, cv, format) {
    let currentValue = shuffle(cv[format]).slice(0, 1)[0];
    const otherValues = fourValues.filter((artist) => artist !== cv);

    if (av.indexOf(currentValue) > -1 || findIfValueInArray(otherValues, currentValue, format)) {
        getSingleValue(fourValues, av, cv, format);
    } else {
        av.push(currentValue);
    }

    return av;
}

// For seeing if there are matching values in array
function findIfValueInArray(otherValues, currentValue, format) {
    return !!otherValues.find(function(value) {
        return value[format].indexOf(currentValue) > -1;
    });
}

/////////

const shuffleAllSubjectValues = (format, fourValues) => {

    const subject = sample(fourValues);
    const answers = getNoDuplicateValuesInArrayByKey(subject, fourValues, format);

    let extra;

    switch (format) {
        case 'artist':
            extra = { song: sample(subject.songs) };
            break;
        case 'author':
            extra = { book: sample(subject.books) };
            break;
        case 'director':
            extra = { film: sample(subject.films) };
            break;
        case 'nation':
            extra = { landmark: sample(subject.landmarks) };
            break;
    }
    return {
        type: format,
        answers: answers,
        subject: subject,
        extra: extra
    };
};

// TODO: This method needs work still
const getNoDuplicateValuesInArrayByKey = (subject, fourValues, format) => {

    console.log(subject);
    console.log(fourValues);

    if (Array.isArray(subject[format])) {

        const otherValues = fourValues.filter((val) => val !== subject);

        console.log(subject);
        console.log(otherValues);
        console.log(format);

        subject[format].map((val, idx) => {
            otherValues.map((atst) => {
                if (atst[format].indexOf(val) > -1) {
                    subject[format].splice(idx, 1);
                }
            });
        });
    }
    console.log(subject);
    console.log(fourValues);

    return shuffle(pluck(fourValues, format));
};

const musicMainFunc = (music, format) => {
    const fourArtists = shuffle(music).slice(0,4);
    return format === 'artist' ? shuffleAllSubjectValues(format, fourArtists) : shuffleAllArrayValues(music, format, fourArtists);
};

const booksMainFunc = (books, format) => {
    const fourAuthors = shuffle(books).slice(0,4);
    return format === 'author' ? shuffleAllSubjectValues(format, fourAuthors) : shuffleAllArrayValues(books, format, fourAuthors);
};

const directorsMainFunc = (directors, format) => {
    const fourDirectors = shuffle(directors).slice(0,4);
    return format === 'director' ? shuffleAllSubjectValues(format, fourDirectors) : shuffleAllArrayValues(directors, format, fourDirectors);
};

const nationsMainFunc = (nations, format) => {
    const fourNations = shuffle(nations).slice(0,4);
    return format === 'nation' ? shuffleAllSubjectValues(format, fourNations) : shuffleAllArrayValues(nations, format, fourNations);
};

const getAllQuestions = () => {

    const allBooks = {
        'categoryName': 'Books',
        'questions' : loopThroughAndGetFiveValues(books, ['author', 'books'], booksMainFunc)
    };
    const allMusic = {
        'categoryName': 'Music',
        'questions' : loopThroughAndGetFiveValues(music, ['artist', 'albums', 'songs'], musicMainFunc)
    };
    const allDirectors = {
        'categoryName': 'Directors',
        'questions' : loopThroughAndGetFiveValues(directors, ['director', 'films'], directorsMainFunc)
    };
    const allNations = {
        'categoryName': 'Nations',
        'questions' : loopThroughAndGetFiveValues(nations, ['nation', 'cities', 'landmarks'], nationsMainFunc)
    };

    return shuffle([allMusic, allBooks, allDirectors, allNations]).slice(0,3);
};

const loopThroughAndGetFiveValues = (arr, cats, func) => {
    const retArray = [];

    for (var i = 0; i < arr.length; i++) {
        if (retArray.length >= 5) {
            return retArray;
        }
        retArray.push( func(arr,sample(cats)) );
    }

    return retArray;
};

const categories = getAllQuestions();

const resetState = (cat, qst) => {
    return {
        category: cat,
        type: qst.type,
        answers: qst.answers,
        subject: qst.subject,
        extra: qst.extra || null
    }
};

/* TODO: change App, maybe MainGrid and maybe QuestionAnswer into class components */

function App() {
    let [ category, setCategory ] = useState(null);
    let [ questionAnswer, setQuestionAnswer ] = useState({});

    let [bgColor, setBgColor] = useState('white');
    let [showButton, setShowButton] = useState(false);
    let [showMainGrid, setShowMainGrid] = useState(true);
    let [questionState, setQuestionState] = useState(resetState(category, questionAnswer));
    let [points, setPoints] = useState(0);
    let [totalPoints, setTotalPoints] = useState(0);

    const selectAnswer = (answer, points) => {

        if (getAnswer(answer)) {
            setBgColor('green');
            setTotalPoints(totalPoints + points);
        } else {
            setBgColor('red');
            setTotalPoints(totalPoints - points);
        }

        setShowButton(true);
    };

    const baseValue = 100;

    const selectQuestionAnswer = (category, questionAnswer, points) => {
        resetCatAndAnswer(category, questionAnswer, points);
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
                ? (<MainGrid categories={categories} selectQuestionAnswer={selectQuestionAnswer} baseValue={baseValue}/>)
                : (<QuestionAnswer {...questionState}
                                   bgColor={bgColor}
                                   points={points}
                                   selectAnswer={selectAnswer}
                                   showButton={showButton}
                                   showNextQuestion={() => {
                                       resetCatAndAnswer(null, {}, 0);
                                       setBgColor('white');
                                       setShowMainGrid(true);
                                   }} />)
            }
            <ScoreBoard totalPoints={totalPoints} />

        </div>
    );
}

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
