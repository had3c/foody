import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct, updateQuantity } from '../../../redux/features/basketSlice/basketSlice';
import style from './style/Basket.module.css'
import basket from '../../../assets/icons/red_basket.svg'
import deleteBasket from '../../../assets/icons/delete_sweep.svg'
import { LuShoppingBasket } from "react-icons/lu";
import Checkout from '../../common/components/CheckBasket/Checkout'

function BasketItems() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const basketProducts = useSelector((state) => state.basket.products);
 

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleDeleteAll = () => {
    basketProducts.forEach(product => {
      dispatch(removeProduct(product.id));
    });
  };

  const handleCheckoutClick = () => {
    if (basketProducts.length > 0) {
      navigate('/user/checkout');
    }
  };

  return (
    <div className={style.basketItems}>
      <div>
        <h2>{t('Your Basket')}</h2>
        <div className={style.basketCount}>
          <img src={basket} alt="" />
          <p>{basketProducts.length} {t('items')}</p>
        </div>

        <div className={style.basketList}>
        {basketProducts.length > 0 ? ( <div className={style.deleteAll}>
                      <button onClick={handleDeleteAll}>{t('Delete all')}</button>
                  </div>) : (<></>)}
       
          {basketProducts.length > 0 ? (
            basketProducts.map((product) => (
              <div key={product.id} className={style.listCard}>
                <div className={style.listHead}>
                  <img 
                    src={deleteBasket} 
                    alt="" 
                    onClick={() => handleRemoveProduct(product.id)}
                  />
                </div>
                <div className={style.listBody}>
                  <div className={style.listInform}>
                    <img src={product.image} alt="" />
                    <div>
                      <p>{product.name}</p>
                      <span>${(product.price * product.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                  <div className={style.itemCount}>
                    <button onClick={() => handleUpdateQuantity(product.id, product.quantity + 1)} className={style.operation}>＋</button>
                    <p>{product.quantity}</p>
                    <button onClick={() => handleUpdateQuantity(product.id, product.quantity - 1)} className={style.operation}>‒</button>
                  </div>
                </div>
              </div>
            ))
          ) : (

            // Basket Boshdusa

            <div className={style.emptyBasket}>
              <LuShoppingBasket size={180} />
              <p>{t('Opps!')}</p>
              <p>{t('Basket Empty')}</p>
            </div>
          )}
        </div>
      </div>

      <div style={{ cursor: 'pointer' }} onClick={handleCheckoutClick}>
        <Checkout basketProducts={basketProducts}/>
      </div>
    </div>
  )
}

export default BasketItems
