import style from './style/Restaurants.module.css'
import {useState} from 'react'
import margarita from '../../assets/images/margarita.svg'
import filter from '../../assets/icons/filter_list.svg'
import FilterMenu from './components/FilterMenu/FilterMenu';
export default function Restaurants() {
const [isOpen , setIsOpen]= useState(false)

function openFilterMenu(){
  setIsOpen(!isOpen)
}

  return <div className={style.restaurants}>
    {/*        Resturant List         */}
    <div className={style.restList}>
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
    {isOpen && <FilterMenu/>}
  </div>;
}
