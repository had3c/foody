import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StyleFAQ from '../style/FAQ.module.css';
import { useFaqData } from './FAQData';
import { FaqItem } from './FAQItem';

function FAQ() {
    const [openIndex, setOpenIndex] = useState(-1);
    const faqData = useFaqData();

    return (
        <motion.div 
            className={StyleFAQ.faqContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h1 
                className={StyleFAQ.hh}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                F.A.Q
            </motion.h1>
            <AnimatePresence>
                {faqData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                        <FaqItem
                            question={item.question}
                            answer={item.answer}
                            isOpen={index === openIndex}
                            toggleOpen={() => setOpenIndex(index === openIndex ? -1 : index)}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
    );
}

export default FAQ;
