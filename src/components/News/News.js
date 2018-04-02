import React from 'react';
import PropTypes from 'prop-types';
import { news } from '../../tmpDefines'

const NewsList = () => {
    let object_list = news.map((item) => (
        <div className={"jumbotron"} key={item.id}>
            <h2> { item.title } </h2>
            <p className={"lead"}> {item.short} </p>
            <p className={"lead"}>
                <a className={"btn btn-primary btn-lg"} href={"/news/"+item.id} role="button">Читать подробнее</a>
            </p>
        </div>
        )
    );

    return <div>{ object_list }</div>
};


const News = () => {
    const NewsId = this.props.match.params.id;
    let content;
    for (let i of news) {
        if (""+i.id === NewsId){
            content = i.content;
        }
    }
    return <div> { content }</div>;
};

News.propTypes = {
    match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  })
};

export { NewsList, News }
