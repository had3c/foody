import React from 'react'
import style from './Offers.module.css'
import secKfc from '../../../../assets/images/secKfc.svg'
import secPizza from '../../../../assets/images/secPizza.svg'
import secFrench from '../../../../assets/images/secFrench.svg'

function Offers() {
  return (
    <div>
          <section className={style.offers}>
        <div className={style.promo}>
          <div className={style.promoTxt}>
            <h2>Menu That Always Make You Fall In Love</h2>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          </div>
          <div className={style.promoImg} >
            <img src={secKfc} alt="" />
          </div>
        </div>

        <div className={`${style.promo} ${style.rowReverse}`}>
          <div className={style.promoTxt}>
            <h2>Yummy Always Papa John’s Pizza.Agree?</h2>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          </div>
          <div className={style.promoImg} >
            <img src={secPizza} alt="" />
          </div>
        </div>

        <div className={style.promo}>
          <div className={style.promoTxt}>
            <h2>Do You Like French Fries? Mmm...</h2>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          </div>
          <div className={style.promoImg} >
            <img src={secFrench} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Offers