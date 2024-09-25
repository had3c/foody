import style from './style/Restaurants.module.css';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import margarita from '../../assets/images/margarita.svg';
import filter from '../../assets/icons/filter_list.svg';
import closeModal from '../../assets/icons/close_modal.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Restaurants() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState(t('All'));
  const navigate = useNavigate();

  const fetchRestaurants = async () => {
    const restaurantsUrl = 'https://firestore.googleapis.com/v1/projects/${import.meta.env.VITE_PROJECT_ID}/databases/(default)/documents/restaurants';
    
    try {
      const response = await axios.get(restaurantsUrl);
      const restaurantsData = response.data.documents.map(doc => ({
        id: doc.fields.id.stringValue,
        name: doc.fields.name.stringValue,
        price: doc.fields.price.stringValue,
        minute: doc.fields.minute.stringValue,
        cuisine: doc.fields.cuisine.stringValue,
        image: doc.fields.image.stringValue,
        createTime: new Date(doc.createTime)
      }));
      
      setAllRestaurants(restaurantsData);
      setFilteredRestaurants(restaurantsData);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  useEffect(() => {
    filterRestaurants();
  }, [selectedCuisine]);

  useEffect(() => {
    function handleResize() {
      setIsOpen(window.innerWidth > 576);
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function openFilterMenu() {
    setIsOpen(!isOpen);
  }

  function closeAfterFilter() {
    if (window.innerWidth <= 576) {
      setIsOpen(false);
    }
  }

  function filterRestaurants() {
    if (selectedCuisine === t('All')) {
      setFilteredRestaurants(allRestaurants);
    } else {
      const filtered = allRestaurants.filter((restaurant) =>
        restaurant.cuisine.includes(selectedCuisine)
      );
      setFilteredRestaurants(filtered);
    }
  }

  function getUniqueCuisines() {
    const cuisinesArray = allRestaurants
      .flatMap((restaurant) => restaurant.cuisine.split(', '));
    const uniqueCuisines = [...new Set(cuisinesArray)].sort(); 
    return [t('All'), ...uniqueCuisines];
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
                {getUniqueCuisines().map((cuisine) => (
                  <div
                    key={cuisine}
                    className={style.restaurant}
                    onClick={() => {
                      setSelectedCuisine(cuisine);
                      closeAfterFilter();
                    }}
                  >
                    <img src={margarita} alt="" />
                    <p className={style.restName}>{cuisine}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={style.filter} onClick={openFilterMenu}>
        <img src={filter} alt="" />
        <p>{t('Filters')}</p>
      </div>

      <div className={style.cards}>
        {filteredRestaurants.map((restaurant) => (
          <div key={restaurant.id} className={style.card} onClick={() => navigate(`/restaurants/${restaurant.id}`)}>
            {restaurant.createTime >= new Date('2024-09-20') && <div className={style.newRest}>NEW</div>}
            <img src={restaurant.image}/>
            <h6 className={style.cardTitle}>{restaurant.name}</h6>
            <p>{restaurant.cuisine}</p>
            <div className={style.cardFooter}>
              <span className={style.delivery}>${restaurant.price} {t('Delivery')}</span>
              <span className={style.time}>{restaurant.minute} {t('Min')}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
