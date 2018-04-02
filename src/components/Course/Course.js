import React from 'react';
import PropTypes from 'prop-types';

const Course = (props) => {
    return <input type="text" value={props.lastCurrency} className={'form-control'}/>
};

Course.propTypes = {
     lastCurrency: PropTypes.string
};

export default Course;