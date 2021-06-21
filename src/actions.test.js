import * as actions from "./actions"
import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const mockStore = configureStore([thunk])

describe("setSearchField", () => {
    it("should create an action to search robots", () => {
        const text = "test"
        const expectedActions = {
            type: CHANGE_SEARCHFIELD,
            payload: text,
        }
        expect(actions.setSearchField(text)).toEqual(expectedActions)
    })
})


describe("requestRobots", () => {
    //for async fn install redux-mock-store
    it("should requestRobots api call", () => {
        const store = mockStore();
        store.dispatch(actions.requestRobots());
        const action = store.getActions();
        const expectedActions = {
            type: REQUEST_ROBOTS_PENDING,
        }
        expect(action[0]).toEqual(expectedActions)
    })
})

//challenge test the REQUEST_ROBOTS_SUCCESS,//REQUEST_ROBOTS_FAILED

//todo for testing async tests is a library nock > npm install --save-dev nock
// or //? install supertest library for api calls to get a reply of call>> npm install supertest --save-dev