import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { news } from '../../tmpDefines'

class NewsList extends Component {
    render(){
        let object_list = news.map((item) => (
            <div className={"jumbotron"} key={ item.id }>
              <h1 className={"display-5"}> { item.title } </h1>
              <p className={"lead"}> { item.short } </p>
              <p className={"lead"}>
                <a className={"btn btn-primary btn-lg"} href={"/news/"+item.id} role="button">Читать подробнее</a>
              </p>
            </div>
            )
        );

        return(
            <div>
                { object_list }
            </div>
        )
    }
}

class News extends Component{
    render(){
        const NewsId = this.props.match.params.id;
        return <h2>Товар № { NewsId }</h2>;
    }
}

News.propTypes = {
    match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  })
};

export { NewsList, News }
