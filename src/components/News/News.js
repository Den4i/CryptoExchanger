import React from 'react';
import PropTypes from 'prop-types';
import {news} from '../../tmpDefines';


const News = (props) => {
    const NewsId = props.match.params.id;
    let content;
    for (let i of news) {
        if (''+i.id === NewsId) {
            content = i.content;
        }
    }
    return <div>{content}</div>;
};

News.propTypes = {
    match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

export default News;
