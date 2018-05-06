/* eslint-disable max-len,require-jsdoc */
import React from 'react';
import PropTypes from 'prop-types';
import {cryptListArray} from '../../tmpDefines';


class CryptList extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        this.props.handleChange(e.target.name);
    };

    render() {
        const buttonList = cryptListArray.map((item) => (<button key={item} name={item} onClick={this.handleChange}
                    className ={this.props.current === item ? 'btn btn-success': 'btn btn-secondary'}>{item}</button>));
        return (
            <div className="btn-group-vertical" role="group">
                {buttonList}
            </div>
        );
    }
}

CryptList.propTypes = {
    handleChange: PropTypes.func,
    current: PropTypes.string,
};


export default CryptList;
