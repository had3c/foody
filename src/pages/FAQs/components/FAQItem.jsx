import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ADDIcon from '../../../assets/icons/add_basket.svg';
import remove from '../../../assets/icons/remove.svg';
import StyleFaqItem from '../style/FAQItem.module.css';

export const FaqItem = ({ question, answer, isOpen, toggleOpen }) => (
    <div className={StyleFaqItem.faqItem}>
        <motion.div 
            className={StyleFaqItem.faqQuestion} 
            onClick={toggleOpen}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            {question}
            <motion.span 
                className={`${StyleFaqItem.faqToggle} ${isOpen ? StyleFaqItem.open : ''}`}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
            >
                <img src={isOpen ? remove : ADDIcon} alt="" />
            </motion.span>
        </motion.div>
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    className={StyleFaqItem.faqAnswer}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.1 }}
                >
                    {answer}
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);