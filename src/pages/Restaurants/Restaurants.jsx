import style from './style/Restaurants.module.css'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import margarita from '../../assets/images/margarita.svg'
import filter from '../../assets/icons/filter_list.svg'
import closeModal from '../../assets/icons/close_modal.svg';

export default function Restaurants() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 576) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function openFilterMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={style.restaurants}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={style.modalBg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, type: 'tween' }}
          >
            <motion.div className={style.restList} initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '100%' }}
              transition={{ duration: 0.4, type: 'tween' }} >
              <img src={closeModal} alt="" className={style.closeModal} onClick={openFilterMenu} />
              <div className={style.scroll}>
                <div className={style.restaurant}>
                  <img src={margarita} alt="" />
                  <p className={style.restName}>Chinese</p>
                </div>
                <div className={style.restaurant}>
                  <img src={margarita} alt="" />
                  <p className={style.restName}>Chinese</p>
                </div>
                <div className={style.restaurant}>
                  <img src={margarita} alt="" />
                  <p className={style.restName}>Chinese</p>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={style.filter} onClick={openFilterMenu}>
        <img src={filter} alt="" />
        <p>Filters</p>
      </div>

      <div className={style.cards}>
        <div className={style.card}>
          <img src={margarita} alt="" />
          <h6 className={style.cardTitle}>Papa Johns</h6>
          <p>chinese, sea-food, thai, lebanese, caribbean</p>
          <div className={style.cardFooter}>
            <span className={style.delivery}>$5 Delivery</span>
            <span className={style.time}>09 Min</span>
          </div>
        </div>
        <div className={style.card}>
          <img src={margarita} alt="" />
          <h6 className={style.cardTitle}>Papa Johns</h6>
          <p>chinese, sea-food, thai, lebanese, caribbean</p>
          <div className={style.cardFooter}>
            <span className={style.delivery}>$5 Delivery</span>
            <span className={style.time}>09 Min</span>
          </div>
        </div>
        <div className={style.card}>
          <img src={margarita} alt="" />
          <h6 className={style.cardTitle}>Papa Johns</h6>
          <p>chinese, sea-food, thai, lebanese, caribbean</p>
          <div className={style.cardFooter}>
            <span className={style.delivery}>$5 Delivery</span>
            <span className={style.time}>09 Min</span>
          </div>
        </div>
        <div className={style.card}>
          <img src={margarita} alt="" />
          <h6 className={style.cardTitle}>Papa Johns</h6>
          <p>chinese, sea-food, thai, lebanese, caribbean</p>
          <div className={style.cardFooter}>
            <span className={style.delivery}>$5 Delivery</span>
            <span className={style.time}>09 Min</span>
          </div>
        </div>
        <div className={style.card}>
          <img src={margarita} alt="" />
          <h6 className={style.cardTitle}>Papa Johns</h6>
          <p>chinese, sea-food, thai, lebanese, caribbean</p>
          <div className={style.cardFooter}>
            <span className={style.delivery}>$5 Delivery</span>
            <span className={style.time}>09 Min</span>
          </div>
        </div>
        <div className={style.card}>
          <img src={margarita} alt="" />
          <h6 className={style.cardTitle}>Papa Johns</h6>
          <p>chinese, sea-food, thai, lebanese, caribbean</p>
          <div className={style.cardFooter}>
            <span className={style.delivery}>$5 Delivery</span>
            <span className={style.time}>09 Min</span>
          </div>
        </div>
      </div>
    </div>
  );
}

