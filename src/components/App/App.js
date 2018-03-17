import React from 'react';
import PoloniexTicket from '../PoloniexTicket/PoloniexTicket';
import Course from '../Course/Course';
import PropTypes from 'prop-types';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {currentLeft: "", currentRight: "", result: ""};
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
      let lastCurrency = "";
      if (this.state.currentLeft !== "" && this.state.currentRight !== ""){
        let polo = sessionStorage.getItem("poloniex");
        let data = JSON.parse(polo);

        if (data[left+"_"+right]){
            lastCurrency = 1 / data[left+"_"+right].last;
        } else
        if (data[right+"_"+left]){
            lastCurrency = data[right+"_"+left].last
        } else {
            lastCurrency = 'Нет курса обмена';
        }
      }

      return lastCurrency.toString();
  };

  leftInLog = (e) => {
      let result = parseInt(e.target.value)* this.getResult();
      this.setState({result: ""+result});
  };

  render(){
        return (
            <div className={"col-12"}>
                <div style={{float:"left"}}>
                    <LeftInput name={this.state.currentLeft} onCount={this.leftInLog} />
                    <PoloniexTicket say = {this.getCurrencyLeft}/>
                </div>
                <div style={{float:"left"}}>
                    <ResultInput result={this.state.result} />
                    <PoloniexTicket say = {this.getCurrencyRight} result={this.state.result}/>
                </div>
                <div style={{float:"left"}}><Course lastCurrency = {this.getResult()}/></div>
            </div>
        )
    }
}

const LeftInput = function (props) {
    return <input type="number" name={props.currentLeft} onChange={props.onCount} value={props.result} className={'form-control'}/>
};

const ResultInput = function (props) {
    return <input type="text" value={props.result} className={'form-control'}/>
};

LeftInput.propTypes = {
  currentLeft: PropTypes.string,
  onCount: PropTypes.func,
  result: PropTypes.string
};

ResultInput.propTypes = {
  result: PropTypes.string
};

export { App, LeftInput, ResultInput, PoloniexTicket, Course };