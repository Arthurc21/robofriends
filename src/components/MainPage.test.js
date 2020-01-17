import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'a',
        isPending: false
    };
    wrapper = shallow(<MainPage { ...mockProps }/>)
});

it('Renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
});

it('Filters robots correctly', () => {
    expect(wrapper.instance()).filterRobots([]).toEqual([]);
});
