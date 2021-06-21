import { shallow } from 'enzyme';
import React from "react"
import MainPage from "./MainPage"
import { shallowToJson } from 'enzyme-to-json';


describe("MainPage testing", () => {
    let wrapper;

    beforeEach(() => {
        const mockProps = {
            onRequestRobots: jest.fn(),
            robots: [],
            searchField: '',
            isPending: false,
        }

        wrapper = shallow(<MainPage {...mockProps} />)
    })

    it("renders MainPage without crashing", () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot()
    })

    it("filter the robots correctly", () => {
        const mockProps2 = {
            onRequestRobots: jest.fn(),
            robots: [{
                id: 2,
                name: "robot",
                email: "robot@gmail.com",
            }],
            searchField: 'robot',
            isPending: false,
        }

        const wrapper2 = shallow(<MainPage {...mockProps2} />)
        expect(wrapper2.instance().filteredRobots([])).toEqual([{
            id: 2,
            name: "robot",
            email: "robot@gmail.com",
        }])
    })

    it("filter the robots correctly 2", () => {
        const mockProps3 = {
            onRequestRobots: jest.fn(),
            robots: [{
                id: 2,
                name: "robot",
                email: "robot@gmail.com",
            }],
            searchField: 'a',
            isPending: false,
        }

        const wrapper3 = shallow(<MainPage {...mockProps3} />)
        expect(wrapper3.instance().filteredRobots([])).toEqual([])
    })

    it("checks for isPending true/false check", () => {
        const mockProps4 = {
            onRequestRobots: jest.fn(),
            robots: [],
            searchField: '',
            isPending: true,
        }
        const wrapper4 = shallow(<MainPage {...mockProps4} />)
        // //console.log("wrapper4: ", shallowToJson(wrapper4)); //if we want to check for the prop isPending we search for the text that it renders

        expect(wrapper4.find("Loading")).toBeTruthy()
    })
})