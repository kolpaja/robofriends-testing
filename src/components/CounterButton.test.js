import { shallow } from 'enzyme';
import React from "react"
import CounterButton from "./CounterButton"
import { shallowToJson } from 'enzyme-to-json';

it("CounterButton comp test", () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor} />)
    const toJson = shallowToJson(wrapper)
    expect(toJson).toMatchSnapshot();
})
it("correctly increments the counter state", () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor} />)


    wrapper.find('#counter').simulate("click")
    wrapper.find('#counter').simulate("click")
    expect(wrapper.state()).toEqual({ count: 2 })

    expect(wrapper.props().color).toEqual("red")
})