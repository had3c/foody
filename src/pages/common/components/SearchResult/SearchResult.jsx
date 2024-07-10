import { useState } from 'react'
import React from 'react'
import style from './Search.module.css'
function SearchResult() {

    const [nextItems, setnextItems] = useState(4);
    const showMoreItems = () => {
        setnextItems(prevItems => prevItems + 4); 
    };

    const restaurants = [
        { name: "Mc Donald’s", description: "Delicious and fresh" },
        { name: "Mc Donald’s", description: "Delicious and fresh" },
        { name: "Mc Donald’s", description: "Delicious and fresh" },
        { name: "Mc Donald’s", description: "Delicious and fresh" },
        { name: "Mc Donald’s", description: "Delicious and fresh" },
        { name: "Mc Donald’s", description: "Delicious and fresh" }
    ];
    return (
        <div className={style.search}>
            {restaurants.slice(0, nextItems).map((restaurant, index) => (
                <div key={index} className={style.restaurant}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa_caSh10VMqdZiEdpoCwQ6ey6Qd3A8VZZqA&s" alt="" />
                    <div>
                        <h6>{restaurant.name}</h6>
                        <p>{restaurant.description}</p>
                    </div>
                </div>
            ))}
            {nextItems < restaurants.length &&
                <div className={style.restaurant}>
                    <button onClick={showMoreItems}>More ➔</button>
                </div>
            }
        </div>
     
    )
}

export default SearchResult