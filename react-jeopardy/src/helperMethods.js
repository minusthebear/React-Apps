import {pluck, sample, shuffle} from "underscore";
import {cloneDeep, map} from "lodash";
import {books, directors, music, nations} from "./question-data";
import utils from "./utils";

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

    const subject = cloneDeep(sample(fourValues));

    let extra,
        key;

    switch (format) {
        case 'artist':
            key = 'songs';
            extra = { song: sample(subject.songs) };
            break;
        case 'author':
            key = 'books';
            extra = { book: sample(subject.books) };
            break;
        case 'director':
            key = 'films';
            extra = { film: sample(subject.films) };
            break;
        case 'nation':
            key = 'landmarks';
            extra = { landmark: sample(subject.landmarks) };
            break;
    }

    subject[key] = ensureNoDuplicatesWithOtherArrays(subject, fourValues, format, key);

    return {
        type: format,
        answers: shuffle(pluck(fourValues, format)),
        subject: subject,
        extra: extra
    };
};

const ensureNoDuplicatesWithOtherArrays = (subject, fourValues, format, key) => {
    const otherValues = fourValues.filter((value) => value[format] !== subject[format]);

    const singleArray = otherValues.reduce((av, cv) => {
        return av.concat(cv[key]);
    }, []);

    return subject[key].filter((val) => {
        return singleArray.indexOf(val) === -1;
    });
};

const musicMainFunc = (music, format) => {
    const fourArtists = shuffle(music).slice(0,4);
    return format === 'artist' ? shuffleAllSubjectValues(format, cloneDeep(fourArtists)) : shuffleAllArrayValues(music, format, cloneDeep(fourArtists));
};

const booksMainFunc = (books, format) => {
    const fourAuthors = shuffle(books).slice(0,4);
    return format === 'author' ? shuffleAllSubjectValues(format, cloneDeep(fourAuthors)) : shuffleAllArrayValues(books, format, cloneDeep(fourAuthors));
};

const directorsMainFunc = (directors, format) => {
    const fourDirectors = shuffle(directors).slice(0,4);
    return format === 'director' ? shuffleAllSubjectValues(format, cloneDeep(fourDirectors)) : shuffleAllArrayValues(directors, format, cloneDeep(fourDirectors));
};

const nationsMainFunc = (nations, format) => {
    const fourNations = shuffle(nations).slice(0,4);
    return format === 'nation' ? shuffleAllSubjectValues(format, cloneDeep(fourNations)) : shuffleAllArrayValues(nations, format, cloneDeep(fourNations)    );
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

const writeQuizGrid = (categories) => {
    const   catNames = map(categories, (cat) => cat.categoryName),
        obj = {},
        int = 100;


    map(catNames, (name) => {
        obj[name] = {};
        utils.range(1, 5).map((num) => obj[name][int * num] = false);
    });

    return obj;
};

const resetState = (cat, qst) => {
    return {
        category: cat,
        type: qst.type,
        answers: qst.answers,
        subject: qst.subject,
        extra: qst.extra || null
    }
};

const createScoreCard = () => {
    return {
        0: 0,
        1: 0,
        2: 0
    }
};

export { getAllQuestions, writeQuizGrid, resetState, createScoreCard };