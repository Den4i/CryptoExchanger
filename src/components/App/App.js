/* eslint-disable max-len,require-jsdoc,no-invalid-this */
import React from 'react';
import PoloniexTicket from '../PoloniexTicket/PoloniexTicket';
import PropTypes from 'prop-types';
import DataEntry from '../DataEntry/DataEntry';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentLeft: '', currentRight: '', result: '', data: {}};
    }

    getCurrencyLeft = (e) => {
        this.setState({currentLeft: e});
    };


    getCurrencyRight = (e) => {
        this.setState({currentRight: e});
    };

    getResult = () => {
        let left = this.state.currentLeft;
        let right = this.state.currentRight;
        let lastCurrency = '';
        if (this.state.currentLeft !== '' && this.state.currentRight !== '') {
            const data = this.state.data;

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

        return lastCurrency.toString();
    };

    leftInLog = (e) => {
        let result = parseInt(e.target.value)* this.getResult();
        this.setState({result: ''+result});
    };

    componentDidMount() {
        this.fetchData();
    }

    async fetchData() {
        const response = await fetch('http://127.0.0.1:5000/poloniex');
        const data = await response.json();
        this.setState({data: data});
    }

    render() {
        return (
            <div className={'calc'}>
                <div className={'calc_columns'}>
                    <LeftInput name={this.state.currentLeft} onCount={this.leftInLog} />
                    <PoloniexTicket say={this.getCurrencyLeft}/>
                </div>
                <div className={'calc_columns'}>
                    <ResultInput result={this.state.result} />
                    <PoloniexTicket say={this.getCurrencyRight}/>
                </div>
                <div className={'calc_columns'}><DataEntry lastCurrency = {this.getResult()} /></div>
            </div>
        );
    }
}

const LeftInput = function(props) {
    return <input type="number" name={props.currentLeft} onChange={props.onCount} value={props.result} min={'1'}
                  className={'form-control'}/>;
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

export {App};
