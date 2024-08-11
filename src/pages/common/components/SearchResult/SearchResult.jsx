import { useState } from 'react';
import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { MdKeyboardDoubleArrowRight, MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';
import style from './Search.module.css';

function SearchResult({ debouncedSearch }) {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3;

    const restaurants = [
        { name: "Mc Donald’s", description: "Delicious and fresh" },
        { name: "Mc Donald’s", description: "Delicious and fresh" },
        { name: "Mc Donald’s", description: "Delicious and fresh" },
        { name: "Mc Donald’s", description: "Delicious and fresh" },
        { name: "Mc Donald’s", description: "Delicious and fresh" },
        { name: "Mc Donald’s", description: "Delicious and fresh" },
        { name: "Mc Donald’s", description: "Delicious and fresh" },
        { name: "Pizza Hut", description: "Cheesy and tasty" },
        { name: "KFC", description: "Crispy chicken" },
        { name: "Subway", description: "Healthy sandwiches" },
        { name: "Burger King", description: "Flame-grilled burgers" },
        { name: "Domino's", description: "Hot and fresh pizza" },
        { name: "Starbucks", description: "Coffee and pastries" },
        { name: "Chipotle", description: "Mexican grill" },
        { name: "Wendy's", description: "Fresh beef burgers" },
        { name: "Taco Bell", description: "Tasty tacos" }
    ];

    const filteredRestaurants = debouncedSearch
        ? restaurants.filter(restaurant =>
            restaurant.name.toLowerCase().includes(debouncedSearch.toLowerCase())
        )
        : [];

    const totalPages = Math.ceil(filteredRestaurants.length / itemsPerPage);

    const showMoreItems = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const showPreviousItems = () => {
        if (currentPage > 0) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedRestaurants = filteredRestaurants.slice(startIndex, endIndex);

    return (
        <div className={style.search}>
            {displayedRestaurants.length > 0 ? (
                displayedRestaurants.map((restaurant, index) => (
                    <div key={index} className={style.restaurant}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa_caSh10VMqdZiEdpoCwQ6ey6Qd3A8VZZqA&s" alt="" />
                        <div>
                            <h6>{restaurant.name}</h6>
                            <p>{restaurant.description}</p>
                        </div>
                    </div>
                ))
            ) : (
                debouncedSearch && (
                    <div className={style.noResult}>
                        <IoIosCloseCircleOutline />
                    </div>
                )
            )}
            <div className={style.restaurant}>
                {currentPage > 0 && (
                    <button onClick={showPreviousItems}>
                        <MdOutlineKeyboardDoubleArrowLeft /> Back
                    </button>
                )}
                {currentPage < totalPages - 1 && (
                    <button onClick={showMoreItems}>
                        More <MdKeyboardDoubleArrowRight />
                    </button>
                )}
            </div>
        </div>
    );
}

export default SearchResult;
