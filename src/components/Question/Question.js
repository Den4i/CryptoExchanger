import React from 'react';
import {faqList} from '../../tmpDefines';
import PropTypes from 'prop-types';

const Question = (props) => {
    const faqId = props.match.params.id;
    let content;
    for (let i of faqList) {
        if (''+i.id === faqId) {
            content = i.content;
        }
    }
    return <div>{content}</div>;
};

Question.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    }),
};

export default Question;
