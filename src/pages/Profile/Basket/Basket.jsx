import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import style from './style/Basket.module.css'
import basket from '../../../assets/icons/red_basket.svg'
import deleteBasket from '../../../assets/icons/delete_sweep.svg'
import margarita from '../../../assets/images/margarita.svg'
import Checkout from '../../common/components/CheckBasket/Checkout'
function BasketItems() {
  const {t} = useTranslation()
const navigate= useNavigate()

  return (
    <div className={style.basketItems}>
      <div>
          <h2>{t('Your Basket')}</h2>
        <div className={style.basketCount}>
          <img src={basket} alt="" />
          <p>3 {t('items')}</p>
        </div>

        <div className={style.basketList}>
          <div className={style.listCard}>
            <div className={style.listHead}>
              <img src={deleteBasket} alt="" />
            </div>
            <div className={style.listBody}>
              <div className={style.listInform}>
                <img src={margarita} alt="" />
                <div>
                  <p>Papa John’s Pizza Restaurant</p>
                  <span>$15.80</span>
                </div>

              </div>
              <div className={style.itemCount}>

                <p>＋</p>
                <p>1</p>
                <p>‒</p>

              </div>
            </div>
          </div>
          <div className={style.listCard}>
            <div className={style.listHead}>
              <img src={deleteBasket} alt="" />
            </div>
            <div className={style.listBody}>
              <div className={style.listInform}>
                <img src={margarita} alt="" />
                <div>
                  <p>Papa John’s Pizza Restaurant</p>
                  <span>$15.80</span>
                </div>

              </div>
              <div className={style.itemCount}>

                <p>＋</p>
                <p>1</p>
                <p>‒</p>

              </div>
            </div>
          </div>
          <div className={style.listCard}>
            <div className={style.listHead}>
              <img src={deleteBasket} alt="" />
            </div>
            <div className={style.listBody}>
              <div className={style.listInform}>
                <img src={margarita} alt="" />
                <div>
                  <p>Papa John’s Pizza Restaurant</p>
                  <span>$15.80</span>
                </div>

              </div>
              <div className={style.itemCount}>

                <p>＋</p>
                <p>1</p>
                <p>‒</p>

              </div>
            </div>
          </div>

        </div>
      </div>

      <div className={style.checkout}  onClick={() => navigate('/user/checkout')}>
      <p>{t('Checkout')}</p>
      <div>$ 3.14</div>
    </div>
    
      {/* <div  style={{cursor:'pointer'}} onClick={() => navigate('/user/checkout')}><Checkout/></div> */}

    </div>
  )
}

export default BasketItems

