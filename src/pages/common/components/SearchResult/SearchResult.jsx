import { useState } from 'react';
import React from 'react';
import useOnClickOutside from 'react-cool-onclickoutside';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { useNavigate } from "react-router-dom"
import {useTranslation} from 'react-i18next'

import style from './Search.module.css';

function SearchResult({ debouncedSearch,setSearchResult}) {
    const [shouldShow, setShouldShow]=useState(true)
    const navigate = useNavigate();
    const { t } = useTranslation();

    const restaurants = [
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
        }, {
            id: 6,
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
            id: 7,
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
            id: 8,
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
            id: 9,
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
            id: 10,
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
    ];


    const [nextItems, setnextItems] = useState(3);

    const showMoreItems = () => {
        setnextItems(restaurants.length);
    };
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
    return  shouldShow &&(
        
            <div className={style.search} ref={ref}>
                {filteredRestaurants.length > 0 ? (
                    filteredRestaurants.slice(0, nextItems).map((restaurant, index) => (
                        <div key={index} className={style.restaurant} onClick={() => handleRestaurantClick(restaurant.id)}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa_caSh10VMqdZiEdpoCwQ6ey6Qd3A8VZZqA&s" alt="" />
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
