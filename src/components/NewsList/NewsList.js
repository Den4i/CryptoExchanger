import React from 'react';
import {news} from '../../tmpDefines';


const NewsList = () => {
    let objectList = news.map((item) => (
            <div className={'jumbotron'} key={item.id}>
                <h2> {item.title} </h2>
                <p className={'lead'}> {item.short} </p>
                <p className={'lead'}>
                    <a className={'btn btn-primary btn-lg'} href={'/news/'+item.id} role="button">Читать подробнее</a>
                </p>
            </div>
        )
    );

    return <div>{objectList}</div>;
};


export default NewsList;
