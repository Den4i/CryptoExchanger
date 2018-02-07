import React from 'react';
import PoloniexTicket from '../PoloniexTicket/PoloniexTicket';
import Course from '../Course/Course';
import Navigation from '../Navigation/Navigation';


export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {currentLeft: "", currentRight: ""};
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
            lastCurrency = data[left+"_"+right].last;
        } else
        if (data[right+"_"+left]){
            lastCurrency = data[right+"_"+left].last
        } else {
            lastCurrency = 'Нет курса обмена';
        }
      }
      return lastCurrency;
  };

  componentDidUpdate(prevProps, prevState){
      this.getResult();
  }

  render(){
        return (
            <div style={{width:"80%"}}>
                <div><Navigation/></div>
                <div style={{float:"left"}}><PoloniexTicket say = {this.getCurrencyLeft} /></div>
                <div style={{float:"left"}}><PoloniexTicket say = {this.getCurrencyRight} /></div>
                <div style={{float:"left"}}><Course last = {this.getResult()}/></div>
            </div>
        )
    }
}