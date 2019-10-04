import React from 'react';
import {shallow, mount} from 'enzyme';
import { render, fireEvent, waitForElement } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks';
import NewField from '../NewField';
import questions from '../../../__mocks__/dummyQuestions';

const keys = JSON.parse(questions).map((k,v) => {
    let val = k.replace(/([A-Z])/g, ' $1').trim().replace(/^.{1}/g, k[0].toUpperCase());
    return {value: k, label: val };
})

describe("NewField",function() {

    jest.mock('react-select', () => {
        const componentToMock = () => <select >Select</select>;
        return componentToMock;
    });

    let newField;

    beforeEach(() => {
        newField = mount(<NewField allQuestionData={{}} />)
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


        jest.mock('react-select', () => {
            const componentToMock = () => (
                <select>
                    Select
                </select>
            );
            return componentToMock;
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    })

    it('allQuestionData', () => {
        expect(wrapper.current.props.allQuestionData).toBe(questions);
    })
});


//
// it('smoke test', () => {
//     let mountedNewField = shallow(<NewField />);
// });
