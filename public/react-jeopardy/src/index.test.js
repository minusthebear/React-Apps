import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import Enzyme, {mount, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {pluck, sample, shuffle} from "underscore";

const shuffleAllArrayValues = (music, format, fourValues) => {

    const fourRandomValues = fourValues.reduce(function(av, cv) {
        return getSingleValue(fourValues, av, cv, format);
    }, []);

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

// For getting songs
function getSingleValue(fourValues, av, cv, format) {
    let currentValue = shuffle(cv[format]).slice(0, 1)[0];
    const otherValues = fourValues.filter((artist) => artist !== cv);

    if (av.indexOf(currentValue) > -1 || findIfValueInArray(otherValues, currentValue, format)) {
        getSingleValue(av, cv);
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

const shuffleAllSubjectValues = (music, format, fourValues) => {

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

    subject[format].map((val, idx) => {
        otherValues.map((atst) => {
            if (atst[format].indexOf(val) > -1) {
                subject[format].splice(idx, 1);
            }
        });
    });

    return shuffle(pluck(fourValues, format));
};

const musicMainFunc = (music, format) => {
    const fourArtists = shuffle(music).slice(0,4);
    return format === 'artist' ? shuffleAllSubjectValues(music, format, fourArtists) : shuffleAllArrayValues(music, format, fourArtists);
};

const booksMainFunc = (books, format) => {
    const fourAuthors = shuffle(books).slice(0,4);
    return format === 'author' ? shuffleAllSubjectValues(music, format, fourAuthors) : shuffleAllArrayValues(music, format, fourAuthors);
};

const selectQuestionAnswer = (questionAnswer) => {
};

const getAllQuestions = () => {

    const allBooks = loopThroughAndGetFiveValues(books, ['author', 'books'], booksMainFunc);
    const allMusic = loopThroughAndGetFiveValues(music, ['artist', 'albums', 'songs'], musicMainFunc);

    return {
        music: allMusic,
        books: allBooks
    };
};

const loopThroughAndGetFiveValues = (arr, cats, func) => {
    const retArray = [];

    for (var i = 0; (i < arr.length) || retArray.length < 5; i++) {
        retArray.push( func(arr,sample(cats)) );
    }

    return retArray;
};