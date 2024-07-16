import style from './style/RestaurantDetail.module.css'
import { useState } from 'react';
import addPrdct from '../../assets/icons/add_basket.svg'
import margarita from '../../assets/images/margarita.svg'
import BasketItems from '../common/components/BasketItems/BasketItems';
import BasketModal from './components/BasketModal/BasketModal';

export default function RestaurantDetail() {
  const [isOpen, setIsOpen] = useState(false);

  function openBasket() {
    setIsOpen(true); 
  }


return <div>
  <div className={style.details}>
    <img src="https://www.papajohns.az/img/content/pj_logo_web_new.png" alt="" />
    <div className={style.information}>
      <div className={style.location}>
        <h5>Papa John’s Pizza Restaurant</h5>
        <p>19 Nizami street, Sabail, Baku</p>
      </div>
      <div className={style.foods}>
        <div>
          <p>Cuisine</p>
          <span>pizza, drink, hotdog, sendvich, roll</span>
        </div>

        <div className={style.delivery}>
          <p>$5 Delivery</p>
          <button>Go Back</button>
        </div>
      </div>
    </div>
  </div>

  <div className={style.items}>
    <div className={style.products}>
      <h2>Products</h2>
      <div className={style.prdctCards}>


        <div className={style.prdctCard}>
          <img src={margarita} alt="" className={style.prdctImg} />
          <div className={style.feature}>
            <p>Papa John’s Pizza Restaurant</p>
            <span>Prepared with a patty, a slice of cheese and special sauce</span>
          </div>
          <div className={style.price}>
            <span>From </span>
            <span>$7.90</span>
          </div>
          <img src={addPrdct} alt="" className={style.addPrdct} />
        </div>
        <div className={style.prdctCard}>
          <img src={margarita} alt="" className={style.prdctImg} />
          <div className={style.feature}>
            <p>Papa John’s Pizza Restaurant</p>
            <span>Prepared with a patty, a slice of cheese and special sauce</span>
          </div>
          <div className={style.price}>
            <span>From </span>
            <span>$7.90</span>
          </div>
          <img src={addPrdct} alt="" className={style.addPrdct} />
        </div>
        <div className={style.prdctCard}>
          <img src={margarita} alt="" className={style.prdctImg} />
          <div className={style.feature}>
            <p>Papa John’s Pizza Restaurant</p>
            <span>Prepared with a patty, a slice of cheese and special sauce</span>
          </div>
          <div className={style.price}>
            <span>From </span>
            <span>$7.90</span>
          </div>
          <img src={addPrdct} alt="" className={style.addPrdct} />
        </div>
        <div className={style.prdctCard}>
          <img src={margarita} alt="" className={style.prdctImg} />
          <div className={style.feature}>
            <p>Papa John’s Pizza Restaurant</p>
            <span>Prepared with a patty, a slice of cheese and special sauce</span>
          </div>
          <div className={style.price}>
            <span>From </span>
            <span>$7.90</span>
          </div>
          <img src={addPrdct} alt="" className={style.addPrdct} />
        </div>
        <div className={style.prdctCard}>
          <img src={margarita} alt="" className={style.prdctImg} />
          <div className={style.feature}>
            <p>Papa John’s Pizza Restaurant</p>
            <span>Prepared with a patty, a slice of cheese and special sauce</span>
          </div>
          <div className={style.price}>
            <span>From </span>
            <span>$7.90</span>
          </div>
          <img src={addPrdct} alt="" className={style.addPrdct} />
        </div>
        <div className={style.prdctCard}>
          <img src={margarita} alt="" className={style.prdctImg} />
          <div className={style.feature}>
            <p>Papa John’s Pizza Restaurant</p>
            <span>Prepared with a patty, a slice of cheese and special sauce</span>
          </div>
          <div className={style.price}>
            <span>From </span>
            <span>$7.90</span>
          </div>
          <img src={addPrdct} alt="" className={style.addPrdct} />
        </div>
      </div>

      <div className={style.checkout} onClick={openBasket}>
        <p>3 items</p>
        <div>
          $ 37.40
        </div>
      </div>
    </div>

    <BasketItems />

    {isOpen && <BasketModal/>}

  </div>
</div>;
}
