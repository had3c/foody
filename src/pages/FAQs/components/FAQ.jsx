import React, { useState } from 'react';
import StyleFAQ from '../style/FAQ.module.css';
import {faqData} from './FAQData';
import { FaqItem } from './FAQItem';

function FAQ() {

    const [openIndex, setOpenIndex] = useState(0);


    return (
        <div className={StyleFAQ.faqContainer}>
            <h1 className={StyleFAQ.hh}>F.A.Q.Q.Q.q.q.q</h1>
            {faqData.map((item, index) => (
                <FaqItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={index === openIndex}
                    toggleOpen={() => setOpenIndex(index === openIndex ? -1 : index)}
                />
            ))}
        </div>
    );
}

export default FAQ;

// asdasdasda