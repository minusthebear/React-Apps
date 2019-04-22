import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QuestionAnswer from './QuestionAnswer';
import MainGrid from './MainGrid';
import { shuffle, sample, pluck } from 'underscore';
import * as serviceWorker from './serviceWorker';

const music = [
    {
        artist: 'Oasis',
        songs: ['Wonderwall', 'Morning Glory', 'Live Forever', 'Acquiesce', 'Don\'t Look Back In Anger'],
        albums: ['Definitely Maybe', '(What\'s the Story) Morning Glory', 'Standing on the Shoulders of Giants'],
        genre: 'Brit-pop'
    },
    {
        artist: 'Massive Attack',
        songs: ['Teardrop', 'Risingson', 'Angel', 'Protection', 'Unfinished Sympathy'],
        albums: ['Blue Lines', 'Protection', 'Mezzanine'],
        genre: 'trip-hop'
    },
    {
        artist: 'Nirvana',
        songs: ['Smells Like Teen Spirit', 'Come As You Are', 'About A Girl', 'All Apologies', 'Rape Me'],
        albums: ['Bleach', 'Nevermind', 'In Utero', 'Mtv Unplugged In New York'],
        genre: 'grunge'
    },
    {
        artist: 'Metallica',
        songs: ['Enter Sandman', 'Sad But True', 'Master of Puppets', 'Whiplash', 'Jump In The Fire', 'Blackened', 'Ride The Lightning'],
        albums: ['...And Justice For All', 'Ride The Lightning', 'Master of Puppets', 'The Black Album', 'Kill \'Em All'],
        genre: 'metal'
    },
    {
        artist: 'Deadmau5',
        songs: ['I Remember', 'Ghosts \'n Stuff', 'Maths', 'Strobe', 'Some Chords', 'Raise Your Weapon'],
        albums: ['4x4=12', 'Random Album Title', 'For Lack of a Better Name', 'Album Title Goes Here'],
        genre: 'EDM'
    },
    {
        artist: 'Weezer',
        songs: ['El Scorcho', 'My Name Is Jonas', 'Say It Ain\'t So', 'Beverly Hills', 'Hash Pipe'],
        albums: ['The Blue Album', 'The Green Album', 'The Black Album', 'The White Album', 'Pinkerton'],
        genre: 'indie rock'
    }
];


const books = [
    {
        author: 'John Steinbeck',
        books: ['The Grapes of Wrath', 'The Pearl', 'Cannery Row', 'East of Eden', 'Of Mice And Men', 'Of Dubious Battle'],
        nationality: 'American'
    },
    {
        author: 'Toni Morrison',
        books: ['Song of Solomon', 'Beloved', 'Jazz', 'A Mercy', 'The Bluest Eye'],
        nationality: 'American'
    },
    {
        author: 'Paulo Coehlo',
        books: ['The Alchemist', 'Veronica Decides To Die', 'Eleven Minutes', 'Brida', 'The Fifth Mountain'],
        nationality: 'Brazilian'
    },
    {
        author: 'F. Scott Fitzgerald',
        books: ['The Great Gatsby'],
        nationality: 'American'
    },
    {
        author: 'Ernest Hemingway',
        books: ['A Farewell To Arms', 'The Sun Also Rises', 'The Old Man and the Sea'],
        nationality: 'American'
    }
];

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
    }

    return {
        type: format,
        answers: answers,
        subject: subject,
        extra: extra
    };
};

const getNoDuplicateValuesInArrayByKey = (subject, fourValues, format) => {

    const otherValues = fourValues.filter((val) => val !== subject);

    // console.log('subject: ');
    // console.log(subject)
    // console.log('format: ' + format);



    //
    // subject[format].map((val, idx) => {
    //     otherValues.map((atst) => {
    //         if (atst[format].indexOf(val) > -1) {
    //             subject[format].splice(idx, 1);
    //         }
    //     });
    // })

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

const getAllQuestions = () => {

    const allBooks = {
        'categoryName': 'Books',
        'questions' : loopThroughAndGetFiveValues(books, ['author', 'books'], booksMainFunc)
    };
    const allMusic = {
        'categoryName': 'Music',
        'questions' : loopThroughAndGetFiveValues(music, ['artist', 'albums', 'songs'], musicMainFunc)
    };

    return [allMusic, allBooks];
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
//
// const resetState = () => {
//     return musicMainFunc(music, sample(['artist', 'albums', 'songs']));
// };
//
// let state = resetState();

const resetState = (cat, qst) => {
    return {
        category: cat,
        type: qst.format,
        answers: qst.answers,
        subject: qst.subject,
        extra: qst.extra || null
    }
};

/* TODO: change App, maybe MainGrid and maybe QuestionAnswer into class components */

function App() {
    let [bgColor, setBgColor] = useState('white');
    let [showButton, setShowButton] = useState(false);
    let [showMainGrid, setShowMainGrid] = useState(true);
    let [questionState, setQuestionState] = useState(resetState(null, {}))

    // TODO: figure out thiss
    const format = null;

    const selectAnswer = (answer) => {

        getAnswer(answer)
            ? setBgColor('green')
            : setBgColor('red');

        setShowButton(true);
    };

    const selectQuestionAnswer = (category, questionAnswer) => {
        setQuestionState(resetState(category, questionAnswer));
        setShowMainGrid(false);
    };

    // TODO: This needs a rewrite
    const getAnswer = (answer) => {
        return {};
        // return format === 'artist'
        //     ? (state.subject[format] === answer)
        //     : (state.subject[format].some((ans) => ans === answer));
    };

    return  (
        <div>
            { showMainGrid
                ? (<MainGrid categories={categories} selectQuestionAnswer={selectQuestionAnswer}/>)
                : (<QuestionAnswer {...questionState}
                                   bgColor={bgColor}
                                   selectAnswer={selectAnswer}
                                   showButton={showButton}
                                   showNextQuestion={() => {
                                       setQuestionState({}, {});
                                       setBgColor('white');
                                       setShowMainGrid(true);
                                   }} />)
            }


        </div>
    )


    // return <QuestionAnswer {...state}
    //                    onAnswerSelected={onAnswerSelected}
    //                    onContinue={() => {
    //                        state = resetState();
    //                        render();
    //                    }}
    // />;
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
