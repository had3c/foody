import React, { useState } from 'react';
import styles from '../style/FAQ.module.css';
import { useFaqData } from './FAQData';
import { FaqItem } from './FAQItem';

function FAQ() {
    const [openIndex, setOpenIndex] = useState(-1);
    const faqData = useFaqData();

    return (
        <section className={styles.faqSection}>
            <div className={styles.faqContainer}>
                <h1 className={styles.faqTitle}>F.A.Q</h1>
                <div className={styles.faqList}>
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
            </div>
        </section>
    );
}

export default FAQ;