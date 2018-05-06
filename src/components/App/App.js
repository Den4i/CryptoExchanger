/* eslint-disable max-len,require-jsdoc,no-invalid-this */
import React from 'react';
import PoloniexTicket from '../PoloniexTicket/PoloniexTicket';
import PropTypes from 'prop-types';
import DataEntry from '../DataEntry/DataEntry';

import {connect} from 'react-redux';

import {getData, getLeft, getRight, getLast, getCount} from '../../store/reducer';
import {fetchData, getlastCurrency} from '../../store/action';


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
        let {currentLeft, currentRight, count} = this.props;

        if (currentLeft !== nextProps.currentLeft || currentRight !== nextProps.currentRight ||
            count !== nextProps.count) {
            this.props.dispatch(getlastCurrency());
        }
    }

    render() {
        let {count, lastCurrency} = this.props;
        let result = count*lastCurrency !== 0 ? (count*lastCurrency).toString(): ' ';

        return (
            <div className={'calc'}>
                <div className={'calc_columns'}>
                    <LeftInput onCount={this.setCount}/>
                    <PoloniexTicket say={this.getCurrencyLeft}/>
                </div>
                <div className={'calc_columns'}>
                    <ResultInput result={result}/>
                    <PoloniexTicket say={this.getCurrencyRight}/>
                </div>
                <div className={'calc_columns'}><DataEntry lastCurrency = {lastCurrency} /></div>
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
    };
}

const LeftInput = function(props) {
    return <input type="number" name={props.currentLeft} onChange={props.onCount} min={'1'} className={'form-control'}/>;
};

const ResultInput = function(props) {
    return <input type="text" value={props.result} className={'form-control'} readOnly/>;
};

LeftInput.propTypes = {
    currentLeft: PropTypes.string,
    onCount: PropTypes.func,
    result: PropTypes.string,
};

ResultInput.propTypes = {
    result: PropTypes.string,
};

App.propTypes = {
    currentLeft: PropTypes.string,
    currentRight: PropTypes.string,
    count: PropTypes.string,
    lastCurrency: PropTypes.string,
};


export default connect(mapStateToProps)(App);
