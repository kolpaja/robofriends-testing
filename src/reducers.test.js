import { shallow } from 'enzyme';
import React from "react"
import { shallowToJson } from 'enzyme-to-json';

import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

import * as reducers from "./reducers"
//import * we can import any export from file by typing "reducers.searchRobots" etc

describe("searchRobots", () => {
    const initialStateSearch = { searchField: "" }

    it("should return the initial state", () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: "" })
    })

    it("should handle CHANGE_SEARCHFIELD", () => {
        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCHFIELD,
            payload: "abc"
        })).toEqual({ searchField: "abc" })
    })
})

describe("requestRobots", () => {
    const initialStateRobots = {
        robots: [],
        isPending: false
    }
    it("should return the initial state", () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
    })

    it("should REQUEST_ROBOTS_PENDING", () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING,
        })).toEqual({
            robots: [],
            isPending: true
        })
    })

    it("should REQUEST_ROBOTS_SUCCESS", () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: "1",
                name: "robot",
                email: "robot@gmail.com"
            }]
        })).toEqual({
            robots: [{
                id: "1",
                name: "robot",
                email: "robot@gmail.com"
            }],
            isPending: false
        })
    })

    it("should REQUEST_ROBOTS_FAILED", () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: "error occured"
        })).toEqual({
            error: "error occured",
            robots: [],
            isPending: false
        })
    })
})