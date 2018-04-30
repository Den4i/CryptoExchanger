/* eslint-disable require-jsdoc */
import {DATA_FETCHED} from './actionTypes';
import PoloniexService from '../services/poloniexService';


export function fetchData() {
    return async (dispatch, getState) => {
        try {
            const data = await PoloniexService.fetchData();
            dispatch({type: DATA_FETCHED, data});
            console.log(getState());
        } catch (error) {
            console.error(error);
        }
    };
}

export function getlastCurrency() {
    return (dispatch, getState) => {
        try {
            let state = getState();

            let left = state.currentLeft;
            let right = state.currentRight;
            let data = state.data;

            let lastCurrency = '';

            if (left !== '' && right !== '') {
                if (!data[left + '_' + right]) {
                    if (data[right + '_' + left]) {
                        lastCurrency = data[right + '_' + left].last;
                    } else {
                        lastCurrency = 'Нет курса обмена';
                    }
                } else {
                    lastCurrency = 1 / data[left + '_' + right].last;
                }
            }
            console.log(getState());
            dispatch({
                type: 'GET_LAST_CURRENCY',
                lastCurrency: lastCurrency.toString(),
            });
        } catch (error) {
            console.error(error);
        }
    };
}
