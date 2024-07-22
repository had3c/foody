import style from './style/Restaurants.module.css'
import { useState, useEffect } from 'react'
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
      {isOpen && (
        <div className={style.modalBg}>
          <div className={style.restList}>
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
          </div>
        </div>
      )}

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
      </div>
    </div>
  );
}

