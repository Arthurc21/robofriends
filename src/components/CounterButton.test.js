import {shallow} from 'enzyme';
import React from 'react';
import CounterButton from "./CounterButton";

it('expect to render CounterButton component', () => {
    const mockColor = 'red';
    expect(shallow(<CounterButton color={mockColor}/>)).toMatchSnapshot();
});

it('correctly increments the counter', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor}/>);

    wrapper.find('[id="counter"]').simulate('click');
    wrapper.find('[id="counter"]').simulate('click');
    //simulate simula evento
    expect(wrapper.state()).toEqual({count: 2 });

});

it('correctly set color', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor}/>);

    expect(wrapper.props().color).toEqual('red')
});