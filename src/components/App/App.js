import React from 'react';
import PoloniexTicket from '../PoloniexTicket/PoloniexTicket';
import Course from '../Course/Course';
import PropTypes from 'prop-types';


export default class App extends React.Component {
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
      console.log(result);
      // this.setState({result: result});
      // return result;
      // console.log(e.target.value)
  };

  render(){
        return (
            <div style={{width:"80%"}}>
                <div style={{float:"left"}}><PoloniexTicket say = {this.getCurrencyLeft} leftIn={this.leftInLog}/></div>
                <div style={{float:"left"}}><PoloniexTicket say = {this.getCurrencyRight} result={this.state.result}/></div>
                <div style={{float:"left"}}><Course lastCurrency = {this.getResult()}/></div>
            </div>
        )
    }
}

Course.propTypes = {
     currentLeft: PropTypes.string
};