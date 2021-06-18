import { shallow } from 'enzyme';
import React from "react"
import Scroll from "./Scroll"
import { shallowToJson } from 'enzyme-to-json';

it("Scroll comp test", () => {
    const card = shallow(<Scroll />)
    expect(shallowToJson(card)).toMatchSnapshot();
})