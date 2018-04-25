/* eslint-disable require-jsdoc */
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    data: [],
    currentLeft: '',
    currentRight: '',
    lastCurrency: '',
    count: '',
    result: '',
    location: '',
});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.DATA_FETCHED:
            return state.merge({
               data: action.data,
            });
        case types.GET_CURRENT_LEFT:
            return state.merge({
                currentLeft: action.currentLeft,
            });
        case types.GET_CURRENT_RIGHT:
            return state.merge({
                currentRight: action.currentRight,
            });
        case types.GET_LAST_CURRENCY:
            return state.merge({
                lastCurrency: action.lastCurrency,
            });
        case types.SET_COUNT:
            return state.merge({
                count: action.count,
            });

        case types.GET_TOTAL_COST:
            return state.merge({
                result: action.result,
            });


        default:
            return state;
    }
}

// selectors
export function getData(state) {
    return state.data;
}

export function getLeft(state) {
    return state.currentLeft;
}

export function getRight(state) {
    return state.currentRight;
}

export function getLast(state) {
    return state.lastCurrency;
}

export function getCount(state) {
    return state.count;
}

export function getResult(state) {
    return state.result;
}

