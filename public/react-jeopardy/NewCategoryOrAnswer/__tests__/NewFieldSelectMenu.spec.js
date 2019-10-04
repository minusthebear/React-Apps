import React from 'react';
import {shallow, mount} from 'enzyme';
import NewFieldSelectMenu from "../NewFieldSelectMenu";
import renderer from 'react-test-renderer';

// NOTE: if jest.mock('react-select') is not at top of page, many unit tests will fail
jest.mock('react-select', () => ({options, onChange}) =>
    <select>Select</select>
);

describe('NewFieldSelectMenu', () => {
    it('smoke test', () => {
        const wrapper = shallow(<NewFieldSelectMenu onChange={() => {}} options={[]} testId={'smokeTest'} />);
    });

    it('.newFieldSelectMenu div', () => {
        const wrapper = shallow(<NewFieldSelectMenu onChange={() => {}} options={[]} testId={'msgInABottle'} />);
        const div = wrapper.find('.newFieldSelectMenu-msgInABottle');
        expect(div.length).toBe(1);
    });

    it('..newFieldSelectMenu child select', () => {
        const wrapper = mount(<NewFieldSelectMenu onChange={() => {}} options={[]} testId={'msgInABottle'} />);
        const select = wrapper.find('select');
        expect(select.length).toBe(1);
    });
});

describe("make snapshot", () => {

    it('renders as expected', () => {
        const tree = renderer.create(<NewFieldSelectMenu testId={'smokeTest'} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});