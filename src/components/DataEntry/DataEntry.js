/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Course from '../Course/Course';

const DataEntry = (props) =>{
    return (
        <div>
            <Course lastCurrency={props.lastCurrency}/>
            <input type={'text'} className={'form-control dataEntry'} placeholder={'Кошелек'}/>
            <input type={'email'} className={'form-control dataEntry'} placeholder={'Ваш email'}/>
        </div>
    );
};

DataEntry.propTypes = {
    lastCurrency: PropTypes.string,
};

export default DataEntry;
