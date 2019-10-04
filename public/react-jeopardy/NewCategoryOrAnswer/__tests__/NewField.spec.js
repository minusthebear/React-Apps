import React from 'react';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import NewField from '../NewField';

jest.mock('react-select', () => {
    const componentToMock = () => <select>Select</select>;
    return componentToMock;
});

describe("NewField",function() {
    let newField;

    beforeEach(() => {
        newField = mount(<NewField />)
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

describe("NewField",function() {
    let newField;

    beforeEach(() => {
        newField = mount(<NewField />)
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

//
// it('smoke test', () => {
//     let mountedNewField = shallow(<NewField />);
// });
