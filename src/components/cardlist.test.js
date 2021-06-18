import { shallow } from 'enzyme';
import React from "react"
import CardList from "./CardList"
import { shallowToJson } from 'enzyme-to-json';

it("CardList comp test", () => {

    const mockRobots = [
        {
            id: 1,
            name: "test mock",
            username: "testmock1",
            email: "test@gmail.com",
        }
    ]
    const card = shallow(<CardList robots={mockRobots} />)
    expect(shallowToJson(card)).toMatchSnapshot();
})