
import newFieldService from '../NewFieldService';
import questions from "../../../__mocks__/dummyQuestions";

const dummyData = [
    { value: 'books', label: 'Books' },
    { value: 'music', label: 'Music' },
    { value: 'directors', label: 'Directors' },
    { value: 'nations', label: 'Nations' },
    { value: 'disneyFilms', label: 'Disney Films' },
    { value: 'cuisine', label: 'Cuisine' }
];

describe('setValueAndLabel', () => {
    it('spits out value and label correctly', () => {
        let arr = Object.keys(questions);
        const keys = arr.map((k) => newFieldService.setValueAndLabel(k));
        expect(keys).toEqual(dummyData);
    });
});

describe('getEntriesNames', () => {
    it('spits out all entries names', () => {
        const data = newFieldService.getEntriesNames(questions, 'music');
        expect(data).toEqual([ 'songs', 'albums' ]);
    });
});