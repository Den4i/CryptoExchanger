import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import PropTypes from 'prop-types';

let arr = ["BTC", "AMP", "ARDR", "BCH", "BCN", "BCY", "BELA", "BLK", "BTCD", "BTM", "BTS", "BURST", "CLAM", "CVC", "DASH", "DCR", "DGB",
    "DOGE", "EMC2", "ETC", "ETH", "EXP", "FCT", "FLDC", "FLO", "GAME", "GAS", "GNO", "GNT", "GRC", "HUC", "LBC", "LSK", "LTC", "MAID", "NAV",
    "NEOS", "NMC", "NXC", "NXT", "OMG", "OMNI", "PASC", "PINK", "POT", "PPC", "RADS", "REP", "RIC", "SBD", "SC", "STEEM", "STORJ", "STR",
    "STRAT", "SYS", "VIA", "VRC", "VTC", "XBC", "XCP", "XEM", "XMR", "XPM", "XRP", "XVC", "ZEC", "ZRX", "USDT"];

export default class PoloniexTicket extends React.Component {
    constructor(props){
    super(props);
    this.state = {data: [], current: ""};
    this.handleChange = this.handleChange.bind(this);

    this.handleChangeIn = this.handleChangeIn.bind(this);
  }

  componentDidMount(){
      this.fetchData();
  }

  handleChange(e){
      this.setState({current:e});
   }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.current !== nextState.current) {
        this.sayCurrent(nextState.current);
        return true;
    }
    return false;
  }

  sayCurrent = (e) => {
      this.props.say(e);
  };

  async fetchData (){
    const response = await fetch('http://127.0.0.1:5000/poloniex');
    const data = await response.json();
    this.setState({data: data});

    sessionStorage.setItem('poloniex', JSON.stringify(data));
   }

  handleChangeIn = (e) => {
      // console.log(e.target.value)
      this.props.leftIn(e)
  };

  render () {

      return (
          <div>
              <input type="text" name={this.state.current} onChange={this.handleChangeIn} value={this.props.result}/>
              <ul>
                  {
                      arr.map(function (item) {
                          return (
                              <li key={item}><Button1 name={item} onGreet={this.handleChange} /></li>
                          )
                      }.bind(this))
                  }
              </ul>
          </div>
      )
  }
}

class Button1 extends React.Component {
  handleCurrencyClick = () => {
        this.props.onGreet(this.props.name);
  };

  render (){
        return <Button onClick={this.handleCurrencyClick} name={this.props.name}>{this.props.name} </Button>
  }
}

PoloniexTicket.propTypes = {
    say: PropTypes.func,
    leftIn: PropTypes.func,
    result: PropTypes.string
};

Button1.propTypes = {
    onGreet: PropTypes.func,
    name: PropTypes.string
};