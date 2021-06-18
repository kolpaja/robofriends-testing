import { shallow } from 'enzyme';
import React from "react"
import Card from "./Card"
import { shallowToJson } from 'enzyme-to-json';

it("Card comp test", () => {
    const card = shallow(<Card />)
    expect(shallowToJson(card)).toMatchSnapshot();
})