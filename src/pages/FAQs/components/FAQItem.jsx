import ADDIcon from '../../../assets/icons/add_basket.svg'
import remove from '../../../assets/icons/remove.svg'
import StyleFaqItem from '../style/FAQItem.module.css'


export const FaqItem = ({ question, answer, isOpen, toggleOpen ,rim }) => (
    <div className={StyleFaqItem.faqItem}>
        <div className={StyleFaqItem.faqQuestion} onClick={toggleOpen}>
            {question}
            <span className={`${StyleFaqItem.faqToggle} ${isOpen ? StyleFaqItem.open : ''}`}>
                {isOpen ? <img src={remove} alt="" /> : <img src={ADDIcon} alt="" />}
            </span>
        </div>
        {isOpen && <div className={StyleFaqItem.faqAnswer}>{answer}</div>}
    </div>
);
