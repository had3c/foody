import React, { useState } from 'react';
import StyleFAQ from '../style/FAQ.module.css';
import ADDIcon from '../../../assets/icons/add_basket.svg'
import remove from '../../../assets/icons/remove.svg'

function FAQ() {
    const FaqItem = ({ question, answer, isOpen, toggleOpen }) => (
        <div className={StyleFAQ.faqItem}>
            <div className={StyleFAQ.faqQuestion} onClick={toggleOpen}>
                {question}
                <span className={`${StyleFAQ.faqToggle} ${isOpen ? StyleFAQ.open : ''}`}>
                    {isOpen ? <img src={remove} alt="" />  : <img src={ADDIcon} alt="" />}
                </span>
            </div>
            {isOpen && <div className={StyleFAQ.faqAnswer}>{answer}</div>}
        </div>
    );

    const [openIndex, setOpenIndex] = useState(0);

    const faqData = [
        {
            question: "How to contact with Customer Service?",
            answer: "Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!."
        },
        {
            question: "App installation failed, how to update system information?",
            answer: "Please check your system requirements and try reinstalling the app. If the issue persists, contact our support team."
        },
        {
            question: "Website response taking time, how to improve?",
            answer: "Try clearing your browser cache and cookies. If the problem continues, it might be due to your internet connection or our server load. Please try again later."
        },
        {
            question: "How do I create a account?",
            answer: "To create an account, click on the 'Sign Up' button on our homepage and follow the registration process. You'll need to provide some basic information and choose a password."
        },
        {
            question: "Website response taking time, how to improve?",
            answer: "This question appears to be a duplicate. Please refer to the answer provided earlier."
        }
    ];

    return (
        <div className={StyleFAQ.faqContainer}>
            <h1 className={StyleFAQ.hh}>F.A.Q</h1>
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