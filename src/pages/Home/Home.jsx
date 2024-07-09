import style from './style/Home.module.css'
import background from '../../assets/images/bgBlack.svg'
import burger from '../../assets/images/headerBurger.svg'
import pizzaHut from '../../assets/images/pizzaHut.svg'
import frenchFries from '../../assets/images/frenchfries.svg'
import cheesburger from '../../assets/images/cheesburger.svg'
import boucher from '../../assets/images/boucher.svg'
import healthyFood from '../../assets/images/healthyFood.svg'
import delivery from '../../assets/images/homeDelivery.svg'
import secKfc from '../../assets/images/secKfc.svg'
import secPizza from '../../assets/images/secPizza.svg'
import secFrench from '../../assets/images/secFrench.svg'
import burgers from '../../assets/images/burger.svg'
import pizza from '../../assets/images/pizza.svg'

export default function Home() {
  return <div>

    {/*                  Header                      */}

    <header className={style.header}>
      {/*           Header Slogan         */}

      <div className={style.slogan}>
        <h1>Our Food site makes it easy to find local food</h1>
        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

        <div className={style.btns}>
          <button className={style.register}>Register</button>
          <button className={style.orderNow}>Order now</button>
        </div>
      </div>

      {/*          Header Image           */}

      <div className={style.images}>
        <img src={background} className={style.bgBlack} alt="" />
        <img src={burger} className={style.burger} alt="" />
        <img src={pizzaHut} className={style.pizzaHut} alt="" />
        <img src={frenchFries} className={style.fries} alt="" />
        <img src={cheesburger} className={style.cheesBrgr} alt="" />
      </div>
    </header>


    {/*          Main          */}
    <main>

      {/*              Section Features               */}
      <section className={style.features}>
        <h2 className={style.h2}>Features</h2>
        <p className={style.secTxt}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        <div className={style.cards}>
          <div className={style.card}>
            <img src={boucher} alt="" />
            <h3 className={style.cardTitle}>Discount Boucher</h3>
            <p className={style.cardTxt}>Lorem ipsum is placeholder  commonly used in the graphic </p>
          </div>
          <div className={style.card}>
            <img src={healthyFood} alt="" />
            <h3 className={style.cardTitle}>Fresh healthy Food</h3>
            <p className={style.cardTxt}>Lorem ipsum is placeholder  commonly used in the graphic </p>
          </div>
          <div className={style.card}>
            <img src={delivery} alt="" />
            <h3 className={style.cardTitle}>Fast Home Delivery</h3>
            <p className={style.cardTxt}>Lorem ipsum is placeholder  commonly used in the graphic </p>
          </div>
        </div>


      </section>

      {/*               Section Offers                  */}
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

      {/*              Section New Foods              */}
      <section className={style.features}>
        <h2 className={style.h2}>Our Popular Update New Foods</h2>
        <p className={style.secTxt}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        <div className={style.cards}>
          <div className={style.card}>
            <img src={boucher} alt="" />
            <h3 className={style.cardTitle}>Dubble Chees</h3>
            <p className={style.cardTxt}>Lorem ipsum is placeholder  commonly used in the graphic </p>
          </div>
          <div className={style.card}>
            <img src={healthyFood} alt="" />
            <h3 className={style.cardTitle}>Margarita</h3>
            <p className={style.cardTxt}>Lorem ipsum is placeholder  commonly used in the graphic </p>
          </div>
          <div className={style.card}>
            <img src={delivery} alt="" />
            <h3 className={style.cardTitle}>Twister Menu</h3>
            <p className={style.cardTxt}>Lorem ipsum is placeholder  commonly used in the graphic </p>
          </div>
        </div>


      </section>


      {/*              Section Explor Now              */}
      <section className={style.exploreNow}>
        <div className={style.discover}>
          <img src={pizza} alt="" />
          <div className={style.explore}>
              <h2>
              Discover Restaurants
              Near From you
              </h2>
              <button>Explore now</button>
          </div>
          <img src={burgers} alt="" />
        </div>
      </section>
    </main>


  </div>;
}
