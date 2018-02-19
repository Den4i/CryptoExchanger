import React from 'react';
import PropTypes from 'prop-types';

const Course = function (props) {
    return <input type="text" value={props.lastCurrency}/>
};

Course.propTypes = {
     lastCurrency: PropTypes.string
};

export default Course;