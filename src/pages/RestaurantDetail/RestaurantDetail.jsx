import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { addProduct, removeProduct, updateQuantity } from '../../redux/features/basketSlice/basketSlice';
import style from './style/RestaurantDetail.module.css'
import bstyle from './style/Basket.module.css'
import addPrdct from '../../assets/icons/add_basket.svg'
import margarita from '../../assets/images/margarita.svg'
import basket from '../../assets/icons/red_basket.svg'
import emptyBasket from '../../assets/icons/shopping_basket.svg'
import deleteBasket from '../../assets/icons/delete_sweep.svg'
import { LuShoppingBasket } from "react-icons/lu";
import Checkout from '../../pages/common/components/CheckBasket/Checkout'
import closeModal from '../../assets/icons/close_modal.svg'

export default function RestaurantDetail() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const dispatch = useDispatch();
  const basketProducts = useSelector((state) => state.basket.products);


  const productData = [
    {
      id: 1,
      image: margarita,
      name: "KFC",
      price: 7.90
    },
    {
      id: 2,
      image: margarita,
      name: "Papa John’s Pizza",
      price: 7.00
    },
    {
      id: 3,
      image: margarita,
      name: "Pizza",
      price: 7.70
    },
    {
      id: 4,
      image: margarita,
      name: "Papa John’s",
      price: 7.10
    },
    {
      id: 5,
      image: margarita,
      name: "John’s Pizza",
      price: 7.20
    },
    {
      id: 6,
      image: margarita,
      name: "Coffee",
      price: 3.20
    },
  ];
  const handleAddProduct = (product) => {
    dispatch(addProduct(product));
  };

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity <1) return;
    dispatch(updateQuantity({ id, quantity }));
  };
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
            <p>$5 {t('Delivery')}</p>
            <button onClick={() => navigate('/restaurants')}>{t('Go Back')}</button>
          </div>
        </div>
      </div>
    </div>

    <div className={style.items}>
      <div className={style.products}>
        <h2>{t('Products')}</h2>
        <div className={style.prdctCards}>
          {productData.map((product) => (
            <div key={product.id} className={style.prdctCard}>
              <img src={product.image} alt={product.name} className={style.prdctImg} />
              <div className={style.feature}>
                <p>{product.name}</p>
                <span>Prepared with a patty, a slice of cheese and special sauce</span>
              </div>
              <div className={style.price}>
                <span>From </span>
                <span>${product.price.toFixed(2)}</span>
              </div>
              <img
                src={addPrdct}
                alt="Add to Basket"
                className={style.addPrdct}
                onClick={() => handleAddProduct(product)}
              />
            </div>
          ))}
        </div>
        <div className={style.checkout} onClick={openFilterMenu}>
          <p>{basketProducts.length} {t('items')}</p>
          <div>
          $ {basketProducts.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}
          </div>
        </div>
      </div>

      {isOpen && (<div className={bstyle.modalBg}>
        <div className={bstyle.basketItems}>
          <div>
            <img src={closeModal} alt="" className={bstyle.closeModal} onClick={openFilterMenu} />
            {basketProducts.length > 0 ? (
              <div>
                <div className={bstyle.basketCount}>
                  <img src={basket} alt="" />
                  <p>{basketProducts.length} {t('items')}</p>
                </div>

                <div className={bstyle.basketList}>

                  {basketProducts.map((product) => (
                    <div key={product.id} className={bstyle.listCard}>
                      <div className={bstyle.listHead}>
                        <img
                          src={deleteBasket}
                          alt=""
                          onClick={() => handleRemoveProduct(product.id)}
                        />
                      </div>
                      <div className={bstyle.listBody}>
                        <div className={bstyle.listInform}>
                          <img src={product.image} alt="" />
                          <div>
                            <p>{product.name}</p>
                            <span>${(product.price * product.quantity).toFixed(2)}</span>
                          </div>
                        </div>
                        <div className={bstyle.itemCount}>
                          <p onClick={() => handleUpdateQuantity(product.id, product.quantity + 1)} className={bstyle.operation}>＋</p>
                          <p>{product.quantity}</p>
                          <p onClick={() => handleUpdateQuantity(product.id, product.quantity - 1)}className={bstyle.operation}>‒</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <div className={bstyle.basketCount}>
                  <img src={emptyBasket} alt="" style={{width:'25px'}}/>
                  <p style={{ color: 'grey' }}>0 {t('items')}</p>
                </div>
                <div className={bstyle.emptyBasket}>
                  <LuShoppingBasket size={135} />
                  <p>{t('Opps!')}</p>
                  <p>{t('Basket Empty')}</p>
                </div>
              </div>)}

          </div>
          <Checkout basketProducts={basketProducts}/>
          
        </div>
      </div>)}
    </div>
  </div>;
}

