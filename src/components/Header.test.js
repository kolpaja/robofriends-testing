import { shallow } from 'enzyme';
import React from "react"
import Header from "./Header"
import { shallowToJson } from 'enzyme-to-json';

it("Header comp test", () => {
    const card = shallow(<Header />)
    expect(shallowToJson(card)).toMatchSnapshot();
})