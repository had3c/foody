import React, { useState, useEffect } from 'react';
import useOnClickOutside from 'react-cool-onclickoutside';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import style from './Search.module.css';

function SearchResult({ debouncedSearch, setSearchResult }) {
    const [restaurants, setRestaurants] = useState([]);
    const [shouldShow, setShouldShow] = useState(true);
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [nextItems, setNextItems] = useState(3);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await axios.get('https://firestore.googleapis.com/v1/projects/${import.meta.env.VITE_PROJECT_ID}/databases/(default)/documents/restaurants');
                const restaurantsData = response.data.documents.map(doc => ({
                    id: doc.fields.id.stringValue,
                    name: doc.fields.name.stringValue,
                    cuisine: doc.fields.cuisine.stringValue,
                    image: doc.fields.image.stringValue,
                }));
                setRestaurants(restaurantsData);
            } catch (error) {
                console.error('Error fetching restaurants:', error);
            }
        };

        fetchRestaurants();
    }, []);

    const filteredRestaurants = debouncedSearch
        ? restaurants.filter(restaurant =>
            restaurant.name.toLowerCase().includes(debouncedSearch.toLowerCase())
        )
        : [];

    const handleRestaurantClick = (restaurantId) => {
        navigate(`/restaurants/${restaurantId}`);
        setShouldShow(false);
        setSearchResult('');
    };

    const ref = useOnClickOutside(() => {
        if (shouldShow) {
            setShouldShow(false);
        }
    });

    const showMoreItems = () => {
        setNextItems(restaurants.length);
    };

    return shouldShow && (
        <div className={style.search} ref={ref}>
            {filteredRestaurants.length > 0 ? (
                filteredRestaurants.slice(0, nextItems).map((restaurant) => (
                    <div key={restaurant.id} className={style.restaurant} onClick={() => handleRestaurantClick(restaurant.id)}>
                        <img src={restaurant.image} alt="" />
                        <div>
                            <h6>{restaurant.name}</h6>
                            <p>{restaurant.cuisine}</p>
                        </div>
                    </div>
                ))
            ) : (
                debouncedSearch && (
                    <div className={style.noResult}>
                        {t('No results found')}
                    </div>
                )
            )}

            {nextItems < filteredRestaurants.length && (
                <div className={style.restaurant}>
                    <button onClick={showMoreItems}>
                        More <MdKeyboardDoubleArrowRight />
                    </button>
                </div>
            )}
        </div>
    );
}

export default SearchResult;