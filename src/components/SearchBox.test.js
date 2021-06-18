import { shallow } from 'enzyme';
import React from "react"
import SearchBox from "./SearchBox"
import { shallowToJson } from 'enzyme-to-json';

it("SearchBox comp test", () => {
    const card = shallow(<SearchBox />)
    expect(shallowToJson(card)).toMatchSnapshot();
})