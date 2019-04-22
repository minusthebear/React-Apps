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


const categories = [
    {
        categoryName: 'Popular Music',
        questions: music.splice(0,5)
    },
    {
        categoryName: 'Books',
        questions: books
    }
];


const shuffleAllSongs = (music, format, fourArtists) => {

    const fourRandomValues = fourArtists.reduce(function(av, cv) {
        return getSong(av, cv);
    }, []);

    function getSong(av, cv) {
        let currentValue = shuffle(cv[format]).slice(0, 1)[0];
        const otherBands = fourArtists.filter((artist) => artist !== cv);

        if (av.indexOf(currentValue) > -1 || getSongsInArray(otherBands, currentValue)) {
            getSong(av, cv);
        } else {
            av.push(currentValue);
        }

        return av;
    }

    function getSongsInArray(otherBands, currentValue) {
        return !!otherBands.find(function(band) {
            return band[format].indexOf(currentValue) > -1;
        });
    }

    const answer = sample(fourRandomValues);

    return {
        type: format,
        answers: fourRandomValues,
        subject: music.find(
            (artist) => artist[format].some(title => title === answer)
        ),
        extra: null
    };
};

const shuffleAllArtists = (music, format, fourArtists) => {

    const subject = sample(fourArtists);
    const otherArtists = fourArtists.filter((artist) => artist !== subject);

    subject.songs.map((val, idx) => {
        otherArtists.map((atst) => {
            if (atst.songs.indexOf(val) > -1) {
                subject.songs.splice(idx, 1);
            }
        });
    });

    const answers = shuffle(pluck(fourArtists, 'artist'));

    return {
        type: format,
        answers: answers,
        subject: subject,
        extra: { song: sample(subject.songs) }
    };

};

const musicMainFunc = (music, format) => {
    const fourArtists = shuffle(music).slice(0,4);

    return format === 'artist' ? shuffleAllArtists(music, format, fourArtists) : shuffleAllSongs(music, format, fourArtists);
};

const selectQuestionAnswer = (questionAnswer) => {

};

const resetState = () => {
    return musicMainFunc(music, sample(['artist', 'albums', 'songs']));
};

let state = resetState();

function App() {
    let [bgColor, setBgColor] = useState('white');
    let [showButton, setShowButton] = useState(false);
    let [showMainGrid, setShowMainGrid] = useState(true);
    const format = state.type;

    const selectAnswer = (answer) => {

        getAnswer(answer)
            ? setBgColor('green')
            : setBgColor('red');

        setShowButton(true);
    };

    const getAnswer = (answer) => {
        return format === 'artist'
            ? (state.subject[format] === answer)
            : (state.subject[format].some((ans) => ans === answer));
    };

    console.log(showMainGrid);

    return  (
        <div>
            <QuestionAnswer {...state}
                             bgColor={bgColor}
                             selectAnswer={selectAnswer}
                             showButton={showButton}
                             showNextQuestion={() => {
                                 state = resetState();
                                 setBgColor('white');
                                 render();
                             }} />


            {/*{ showMainGrid*/}
            {/*    ? (<MainGrid categories={categories} />)*/}
            {/*    : (<QuestionAnswer {...state}*/}
            {/*                       bgColor={bgColor}*/}
            {/*                       selectAnswer={selectAnswer}*/}
            {/*                       showButton={showButton}*/}
            {/*                       showNextQuestion={() => {*/}
            {/*                           state = resetState();*/}
            {/*                           setBgColor('white');*/}
            {/*                           render();*/}
            {/*                       }} />)*/}
            {/*}*/}


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
