import style from './style/Restaurants.module.css';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import margarita from '../../assets/images/margarita.svg';
import filter from '../../assets/icons/filter_list.svg';
import closeModal from '../../assets/icons/close_modal.svg';
import { useNavigate } from 'react-router-dom';

export default function Restaurants() {
  const [isOpen, setIsOpen] = useState(true);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  const { t } = useTranslation();
  const navigate = useNavigate()

  const restaurantData = [
    {
      id: 1,
      name: 'Papa Johns',
      delivery: '5',
      location: 'Baku',
      time: '30',
      cuisine: 'Chinese, Sea-food, Thai, Caribbean',
      foods: [
        { id: 1, name: 'Margarita' },
        { id: 2, name: 'Pizza Roll' }
      ]
    },
    {
      id: 2,
      name: 'Bella Italia',
      delivery: '4',
      location: 'New York',
      time: '20',
      cuisine: 'Italian, Mediterranean',
      foods: [
        { id: 1, name: 'Margherita Pizza' },
        { id: 2, name: 'Lasagna' }
      ]
    },
    {
      id: 3,
      name: 'Sushi World',
      delivery: '3',
      location: 'Tokyo',
      time: '25',
      cuisine: 'Japanese, Sushi',
      foods: [
        { id: 1, name: 'California Roll' },
        { id: 2, name: 'Sashimi' }
      ]
    },
    {
      id: 4,
      name: 'Tacos Fiesta',
      delivery: '6',
      location: 'Los Angeles',
      time: '15',
      cuisine: 'Mexican, Tacos',
      foods: [
        { id: 1, name: 'Beef Tacos' },
        { id: 2, name: 'Guacamole' }
      ]
    },
    {
      id: 5,
      name: 'Café Parisien',
      delivery: '4',
      location: 'Paris',
      time: '40',
      cuisine: 'French, Café',
      foods: [
        { id: 1, name: 'Croissant' },
        { id: 2, name: 'Quiche Lorraine' }
      ]
    }
  ];

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

  useEffect(() => {
    filterRestaurants();
  }, [selectedCuisine]);

  function openFilterMenu() {
    setIsOpen(!isOpen);
  }

  function closeAfterFilter() {
    if((window.innerWidth <= 576)){
      setIsOpen(false);
    }
  }

  function filterRestaurants() {
    if (selectedCuisine === 'All') {
      setFilteredRestaurants(restaurantData);
    } else {
      const filtered = restaurantData.filter((restaurant) =>
        restaurant.cuisine.includes(selectedCuisine)
      );
      setFilteredRestaurants(filtered);
    }
  }
  function getUniqueCuisines() {
    const cuisinesArray = restaurantData
      .flatMap((restaurant) => restaurant.cuisine.split(', '));
    const uniqueCuisines = cuisinesArray.filter((value, index, arr) => 
      arr.indexOf(value) === index
    );
    return ['All', ...uniqueCuisines];
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
          <div key={restaurant.id} className={style.card}  onClick={() => navigate(`/restaurants/${restaurant.id}`)}>
            <img src={margarita} alt="" />
            <h6 className={style.cardTitle}>{restaurant.name}</h6>
            <p>{restaurant.cuisine}</p>
            <div className={style.cardFooter}>
              <span className={style.delivery}>${restaurant.delivery} {t('Delivery')}</span>
              <span className={style.time}>{restaurant.time} {t('Min')}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
