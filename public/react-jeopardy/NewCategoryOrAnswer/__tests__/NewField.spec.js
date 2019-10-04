import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import { renderHook } from '@testing-library/react-hooks';
import NewField from '../NewField';
import questions from '../../../__mocks__/dummyQuestions';

const dummyData = [
    { value: 'books', label: 'Books' },
    { value: 'music', label: 'Music' }
];

// NOTE: if jest.mock('react-select') is not at top of page, many unit tests will fail
jest.mock('react-select', () => ({options, onChange}) =>
    <select>Select</select>
);

describe("NewField",function() {

    let newField,
        setState,
        useStateSpy;

    beforeEach(() => {
        setState = jest.fn();
        useStateSpy = jest.spyOn(React, 'useState');
        useStateSpy.mockImplementation((init) => [init, setState]);
        newField = shallow(<NewField allQuestionData={questions} />)
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders a Formsy element', () => {
        const formsy = newField.find('Formsy');
        expect(formsy.length).toBe(1);
    });

    it('renders a single NewFieldSelectMenu', () => {
        const div = newField.find('NewFieldSelectMenu');
        expect(div.length).toBe(1);
    });

    it('Triggers the right methods with one array', () => {
        const div = newField.find('NewFieldSelectMenu');
        div.props().onChange({ value: 'books', label: 'Books' });
        expect(setState).toHaveBeenCalledTimes(3);
        expect(setState).toHaveBeenCalledWith('books');
        expect(setState).toHaveBeenCalledWith({ value: 'books', label: 'Books' });
        expect(setState).toHaveBeenCalledWith(true);
    });

    it('Triggers the right methods with more than one array', () => {
        const div = newField.find('NewFieldSelectMenu');
        div.props().onChange({ value: 'music', label: 'Music' });
        expect(setState).toHaveBeenCalledTimes(3);
        expect(setState).toHaveBeenCalledWith('music');
        expect(setState).toHaveBeenCalledWith([{"label": "Songs", "value": "songs"}, {"label": "Albums", "value": "albums"}]);
        expect(setState).toHaveBeenCalledWith(true);
    });

    it('Triggers the right methods with more than one array', () => {
        const div = newField.find('NewFieldSelectMenu');
        div.props().onChange({ value: 'music', label: 'Music' });
        console.log(newField.current);
    });
});

describe('rendering the component with the correct props', () => {
    let wrapper;

    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation((init) => [init, setState]);

    beforeEach(() => {
        const {result} = renderHook(() => <NewField allQuestionData={questions} />);
        wrapper = result;
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('allQuestionData', () => {
        expect(wrapper.current.props.allQuestionData).toBe(questions);
    });

});

describe("make snapshot", () => {

    it('renders as expected', () => {
        const tree = renderer.create(<NewField allQuestionData={{}} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
