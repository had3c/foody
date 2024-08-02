import style from './style/RestaurantDetail.module.css'
import { useState, useEffect } from 'react';
import bstyle from './style/Basket.module.css'
import addPrdct from '../../assets/icons/add_basket.svg'
import margarita from '../../assets/images/margarita.svg'
import basket from '../../assets/icons/red_basket.svg'
import deleteBasket from '../../assets/icons/delete_sweep.svg'
import Checkout from '../../pages/common/components/CheckBasket/Checkout'
import closeModal from '../../assets/icons/close_modal.svg'

export default function RestaurantDetail() {
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



return <div>
  <div className={style.details}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Papa_John%27s_Logo_2019.svg" alt="" />
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

      <div className={style.checkout} onClick={openFilterMenu}>
        <p>3 items</p>
        <div>
          $ 37.40
        </div>
      </div>
    </div>

    {isOpen && (<div className={bstyle.modalBg}>
            <div className={bstyle.basketItems}>
                <div>   
                    <img src={closeModal} alt="" className={bstyle.closeModal} onClick={openFilterMenu}/>
                    <div>
                        <div className={bstyle.basketCount}>
                            <img src={basket} alt="" />
                            <p>3 items</p>
                        </div>

                        <div className={bstyle.basketList}>
                            <div className={bstyle.listCard}>
                                <div className={bstyle.listHead}>
                                    <img src={deleteBasket} alt="" />
                                </div>
                                <div className={bstyle.listBody}>
                                    <div className={bstyle.listInform}>
                                        <img src={margarita} alt="" />
                                        <div>
                                            <p>Papa John’s Pizza Restaurant</p>
                                            <span>$15.80</span>
                                        </div>

                                    </div>
                                    <div className={bstyle.itemCount}>

                                        <p>＋</p>
                                        <p>1</p>
                                        <p>‒</p>

                                    </div>
                                </div>
                            </div>
                            <div className={bstyle.listCard}>
                                <div className={bstyle.listHead}>
                                    <img src={deleteBasket} alt="" />
                                </div>
                                <div className={bstyle.listBody}>
                                    <div className={bstyle.listInform}>
                                        <img src={margarita} alt="" />
                                        <div>
                                            <p>Papa John’s Pizza Restaurant</p>
                                            <span>$15.80</span>
                                        </div>

                                    </div>
                                    <div className={bstyle.itemCount}>

                                        <p>＋</p>
                                        <p>1</p>
                                        <p>‒</p>

                                    </div>
                                </div>
                            </div>
                            <div className={bstyle.listCard}>
                                <div className={bstyle.listHead}>
                                    <img src={deleteBasket} alt="" />
                                </div>
                                <div className={bstyle.listBody}>
                                    <div className={bstyle.listInform}>
                                        <img src={margarita} alt="" />
                                        <div>
                                            <p>Papa John’s Pizza Restaurant</p>
                                            <span>$15.80</span>
                                        </div>

                                    </div>
                                    <div className={bstyle.itemCount}>

                                        <p>＋</p>
                                        <p>1</p>
                                        <p>‒</p>

                                    </div>
                                </div>
                            </div>
                            <div className={bstyle.listCard}>
                                <div className={bstyle.listHead}>
                                    <img src={deleteBasket} alt="" />
                                </div>
                                <div className={bstyle.listBody}>
                                    <div className={bstyle.listInform}>
                                        <img src={margarita} alt="" />
                                        <div>
                                            <p>Papa John’s Pizza Restaurant</p>
                                            <span>$15.80</span>
                                        </div>

                                    </div>
                                    <div className={bstyle.itemCount}>

                                        <p>＋</p>
                                        <p>1</p>
                                        <p>‒</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></div>


                <Checkout />

            </div>
        </div>)}
  </div>
</div>;
}

