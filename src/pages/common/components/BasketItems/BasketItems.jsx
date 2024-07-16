import React, {useState} from 'react'
import style from './Basket.module.css'
import basket from '../../../../assets/icons/red_basket.svg'
import deleteBasket from '../../../../assets/icons/delete_sweep.svg'
import margarita from '../../../../assets/images/margarita.svg'
import Checkout from '../../../common/components/CheckBasket/Checkout'
function BasketItems() {
 
    return (
        <div className={style.basketItems}>
            <div>
                <div className={style.basketCount}>
                    <img src={basket} alt="" />
                    <p>3 items</p>
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
                </div>
            </div>

            <Checkout />

        </div>  
    )
}

export default BasketItems

