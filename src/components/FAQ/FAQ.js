/* eslint-disable max-len */
import React from 'react';
import {faqList} from '../../tmpDefines';

const FAQ = () => {
    let faq = faqList.map((item) => (
        <div key={item.id}>
            <a className={'btn btn-primary btn-md'} href={'/faq/'+item.id} role="button" >{item.title}</a>
        </div>
        )
    );
    return (
        <div>{faq}</div>
    );
};

export default FAQ;
