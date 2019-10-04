import React from 'react';
import {shallow, mount} from 'enzyme';
import { render, fireEvent, waitForElement } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks';
import NewField from '../NewField';

jest.mock('react-select', () => {
    const componentToMock = () => <select>Select</select>;
    return componentToMock;
});

describe("NewField",function() {
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
    const hook = renderHook(() => <NewField allQuestionData={{ music: true, surfing: true, pickles: false, olives: false }} />)

    it('maybe this works?', () => {
        console.log(hook.result.current);
    });

    it('does this work', () => {
        // console.log(getByTestId('formsy'));
    })
});


//
// it('smoke test', () => {
//     let mountedNewField = shallow(<NewField />);
// });
