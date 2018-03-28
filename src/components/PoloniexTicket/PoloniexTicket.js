import React from 'react';
import PropTypes from 'prop-types';
import { cryptList } from '../../tmpDefines';


export default class PoloniexTicket extends React.Component {
    constructor(props){
    super(props);
    this.state = {data: [], current: ""};
  }

  componentDidMount(){
      this.fetchData();
  }

  handleChange = (e) => {
     this.setState({current:e});
  };

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

  render () {
      const buttonList = cryptList.map((item) => (<Button1 key={item} name={item} onGreet={this.handleChange}
                                           clsName ={this.state.current === item ? 'btn btn-success': 'btn btn-secondary'} />));
      return (
          <div className="btn-group-vertical" role="group">
              { buttonList }
          </div>
      )
  }
}


class Button1 extends React.Component {
  handleCurrencyClick = () => {
        this.props.onGreet(this.props.name);
  };

  render (){
        return <button onClick={this.handleCurrencyClick} name={this.props.name} type="button" className={this.props.clsName}>
            {this.props.name} </button>
  }
}

PoloniexTicket.propTypes = {
    say: PropTypes.func,
    leftIn: PropTypes.func,
    result: PropTypes.string
};

Button1.propTypes = {
    onGreet: PropTypes.func,
    name: PropTypes.string,
    clsName: PropTypes.string
};
