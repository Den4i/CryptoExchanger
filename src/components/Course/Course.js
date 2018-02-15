import React from 'react';
import PropTypes from 'prop-types';


class Course extends React.Component {

    render (){
            return <input value={this.props.lastCurrency} />
    }
}

Course.propTypes = {
     lastCurrency: PropTypes.string
};

export default Course;