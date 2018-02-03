import React from 'react';
import PoloniexTicket from './poloniexTicket';
import Course from './Course';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {currentLeft: "", currentRight: ""};
  }

  getCurrencyLeft = (e) => {
      this.setState({currentLeft: e})
  };

  getCurrencyRight = (e) => {
      this.setState({currentRight: e})
  };

  render(){
        return (
            <div style={{width:"80%"}}>
                <div style={{float:"left"}}><PoloniexTicket say = {this.getCurrencyLeft} /></div>
                <div style={{float:"left"}}><PoloniexTicket say = {this.getCurrencyRight} /></div>
                <div style={{float:"left"}}><Course/></div>
            </div>
        )
    }
}