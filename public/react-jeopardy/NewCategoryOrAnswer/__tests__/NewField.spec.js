import React from 'react';
import {shallow, mount} from 'enzyme';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { renderHook } from '@testing-library/react-hooks';
import NewField from '../NewField';
import questions from '../../../__mocks__/dummyQuestions';

// NOTE: if jest.mock('react-select') is not at top of page, many unit tests will fail
jest.mock('react-select', () => (props) => <select>Select</select>);

describe("NewField",function() {

    let newField;

    beforeEach(() => {
        newField = mount(<NewField allQuestionData={questions} />)
    });

    it('renders a Formsy element', () => {
        const formsy = newField.find('Formsy');
        expect(formsy.length).toBe(1);
    });

    it('renders a single div', () => {
        const div = newField.find('div');
        expect(div.length).toBe(1);
    });

    it('renders a single select element', () => {
        const select = newField.find('select');
        expect(select.length).toBe(1);
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
    })
});

describe("make snapshot", () => {

    it('renders as expected', () => {
        const tree = renderer.create(<NewField allQuestionData={{}} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});


//
// it('smoke test', () => {
//     let mountedNewField = shallow(<NewField />);
// });
