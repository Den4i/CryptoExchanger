/* eslint-disable require-jsdoc,no-invalid-this */
import React from 'react';
import PropTypes from 'prop-types';
import CryptList from '../CryptList/CryptList';


export default class PoloniexTicket extends React.Component {
    constructor(props) {
    super(props);
    this.state = {current: ''};
  }

  handleChange = (e) => {
     this.setState({current: e});
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


   render() {
        const handleChange = this.handleChange;
        const current = this.state.current;
        return <CryptList handleChange={handleChange} current={current}/>;
   }
}


PoloniexTicket.propTypes = {
    say: PropTypes.func,
    leftIn: PropTypes.func,
    result: PropTypes.string,
};
