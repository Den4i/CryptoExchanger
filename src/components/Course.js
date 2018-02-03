import React from 'react';

export default class Course extends React.Component {
    render(){
         return <input value={this.props.course} />
    }
}