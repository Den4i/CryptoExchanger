import React from 'react';
import PropTypes from 'prop-types';

const Course = (props) => {
    return <div>Курс обмена: 1  = {props.lastCurrency}</div>;
};

Course.propTypes = {
    lastCurrency: PropTypes.string,
};

export default Course;
