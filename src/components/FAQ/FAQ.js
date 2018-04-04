import React from 'react';
import PropTypes from "prop-types";
import { faqList } from '../../tmpDefines';

const FAQ = () => {
    let faqList1 = faqList.map((item) => (
		<div key={item.id}>
			<a className={"btn btn-primary btn-md"} href={"/faq/"+item.id} role="button" >{ item.title}</a>
		</div>
        )
    );
    return (
        <div>
			{ faqList1 }
        </div>
    )
};

const Question = (props) => {
    const faqId = props.match.params.id;
    let content;
    for (let i of faqList) {
        if (""+i.id === faqId){
            content = i.content;
        }
    }
    return <div>{ content }</div>;
};

Question.propTypes = {
    match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  })
};

export { FAQ, Question };