import style from './style/Home.module.css'
import { useTranslation } from 'react-i18next';
import background from '../../assets/images/bgBlack.svg'
import burger from '../../assets/images/headerBurger.svg'
import pizzaHut from '../../assets/images/pizzaHut.svg'
import frenchFries from '../../assets/images/frenchfries.svg'
import cheesburger from '../../assets/images/cheesburger.svg'
import boucher from '../../assets/images/boucher.svg'
import healthyFood from '../../assets/images/healthyFood.svg'
import delivery from '../../assets/images/homeDelivery.svg'
import burgers from '../../assets/images/burger.svg'
import pizza from '../../assets/images/pizza.svg'
import dubblechees from '../../assets/images/dubbleChees.svg'
import kfcMenu from '../../assets/images/twisterMenu.svg'
import margarita from '../../assets/images/margarita.svg'
import { useNavigate } from 'react-router-dom'
import Offers from './components/Offers/Offers'

export default function Home() {

  const navigate = useNavigate()
  const { t } = useTranslation();
  return <div>

    {/*                  Header                      */}

    <header className={style.header}>
      {/*           Header Slogan         */}

      <div className={style.slogan}>
        <h1>{t('Our Food site makes it easy to find local food')}</h1>
          <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          <div className={style.btns}>
            <button className={style.register} onClick={() => navigate('/login')}>
              {t('Register')}
            </button>
            <button className={style.orderNow} onClick={() => navigate('/restaurants')}>
              {t('Order now')}
            </button>
            <input type="text" placeholder={t('Search')} className={style.search} />
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


    {/*                    Main                         */}
    <main>

      {/*              Section Features                 */}
      <section className={style.features}>
        <h2 className={style.h2}>{t("Features")}</h2>
        <p className={style.secTxt}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        <div className={style.cards}>
          <div className={style.card}>
            <img src={boucher} alt="" />
            <h3 className={style.cardTitle}>{t('Discount Boucher')} </h3>
            <p className={style.cardTxt}>Lorem ipsum is placeholder  commonly used in the graphic </p>
          </div>
          <div className={style.card}>
            <img src={healthyFood} alt="" />
            <h3 className={style.cardTitle}>{t('Fresh healthy Food')}</h3>
            <p className={style.cardTxt}>Lorem ipsum is placeholder  commonly used in the graphic </p>
          </div>
          <div className={style.card}>
            <img src={delivery} alt="" />
            <h3 className={style.cardTitle}>{t('Fast Home Delivery')}</h3>
            <p className={style.cardTxt}>Lorem ipsum is placeholder  commonly used in the graphic </p>
          </div>
        </div>


      </section>

      {/*               Section Offers                  */}

      <Offers />

      {/*              Section New Foods              */}
      <section className={style.features}>
        <h2 className={style.h2}>{t('Our Popular Update New Foods')}</h2>
        <p className={style.secTxt}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        <div className={style.cards}>
          <div className={style.card}>
            <img src={dubblechees} alt="" />
            <h3 className={style.cardTitle}>{t('Dubble Chees')}</h3>
            <p className={style.cardTxt}>Lorem ipsum is placeholder  commonly used in the graphic </p>
          </div>
          <div className={style.card}>
            <img src={margarita} alt="" />
            <h3 className={style.cardTitle}>{t('Margarita')}</h3>
            <p className={style.cardTxt}>Lorem ipsum is placeholder  commonly used in the graphic </p>
          </div>
          <div className={style.card}>
            <img src={kfcMenu} alt="" />
            <h3 className={style.cardTitle}>{t('Twister Menu')}</h3>
            <p className={style.cardTxt}>Lorem ipsum is placeholder  commonly used in the graphic </p>
          </div>
        </div>


      </section>


      {/*              Section Explore Now              */}
      <section className={style.exploreNow}>
        <div className={style.discover}>
          <img src={pizza} alt="" />
          <div className={style.explore}>
            <h2>
            {t('Discover Restaurants Near From you')}
            </h2>
            <button onClick={() => navigate('/restaurants')}>{t('Explore now')}</button>
          </div>
          <img src={burgers} alt="" />
        </div>
      </section>
    </main>
  </div>;
}
