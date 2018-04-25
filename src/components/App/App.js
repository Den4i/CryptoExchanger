/* eslint-disable max-len,require-jsdoc,no-invalid-this */
import React from 'react';
import PoloniexTicket from '../PoloniexTicket/PoloniexTicket';
import PropTypes from 'prop-types';
import DataEntry from '../DataEntry/DataEntry';

import {connect} from 'react-redux';

import {getData, getLeft, getRight, getLast, getCount, getResult} from '../../store/reducer';
import {fetchData, getlastCurrency, getTotalCost} from '../../store/action';


class App extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchData());
    }

    getCurrencyLeft = (e) => {
        this.props.dispatch({
            type: 'GET_CURRENT_LEFT',
            currentLeft: e,
        });
    };

    getCurrencyRight = (e) => {
        this.props.dispatch({
            type: 'GET_CURRENT_RIGHT',
            currentRight: e,
        });
    };

    setCount = (e) => {
        let count = e.target.value;

        this.props.dispatch({
            type: 'SET_COUNT',
            count: count,
        });
    };


    componentWillReceiveProps(nextProps) {
        if (this.props.currentLeft !== nextProps.currentLeft || this.props.currentRight !== nextProps.currentRight || this.props.count !== nextProps.count) {
            this.props.dispatch(getlastCurrency());
            this.props.dispatch(getTotalCost());
        }
    }

    render() {
        return (
            <div className={'calc'}>
                <div className={'calc_columns'}>
                      <LeftInput onCount={this.setCount}/>
                    <PoloniexTicket say={this.getCurrencyLeft}/>
                </div>
                <div className={'calc_columns'}>
                     <ResultInput result={this.props.result} />
                    <PoloniexTicket say={this.getCurrencyRight}/>
                </div>
                <div className={'calc_columns'}><DataEntry lastCurrency = {this.props.lastCurrency} /></div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        data: getData(state),
        currentLeft: getLeft(state),
        currentRight: getRight(state),
        lastCurrency: getLast(state),
        count: getCount(state),
        result: getResult(state),
    };
}

const LeftInput = function(props) {
    return <input type="number" name={props.currentLeft} onChange={props.onCount} min={'1'} className={'form-control'}/>;
};

const ResultInput = function(props) {
    return <input type="text" value={props.result} className={'form-control'}/>;
};

LeftInput.propTypes = {
    currentLeft: PropTypes.string,
    onCount: PropTypes.func,
    result: PropTypes.string,
};

ResultInput.propTypes = {
    result: PropTypes.string,
};


export default connect(mapStateToProps)(App);
