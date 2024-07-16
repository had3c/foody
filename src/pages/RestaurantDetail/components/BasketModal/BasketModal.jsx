import React, { useState } from 'react'
import style from './BasketModal.module.css'
import closeModal from '../../../../assets/icons/close_modal.svg'
import deleteBasket from '../../../../assets/icons/delete_sweep.svg'
import margarita from '../../../../assets/images/margarita.svg'
import Checkout from '../../../common/components/CheckBasket/Checkout'
function BasketModal() {

  const [isClose, setIsClose]= useState(false)
  return (
    <div>
      {!isClose &&   <div className={style.basket}>
      <div>
        <img src={closeModal} alt="" className={style.closeModal}  onClick={() => setIsClose(true)} />
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


      <Checkout />
    </div>}
    </div>
  
  )
}

export default BasketModal