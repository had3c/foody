import React from 'react';
import StyleAbout from '../style/About.module.css';
import BurgerImg from '../../../assets/images/burger.png';
import PizzaImg from '../../../assets/images/pizza.png';
import CoffeeImg from '../../../assets/images/cofe.png';
import SoupImg from '../../../assets/images/soup.png';

function About() {
    return (
        <div className={StyleAbout.cont}>
            <div className={StyleAbout.content}>
                <div className={StyleAbout.aboutSection}>
                    <h2>About Us</h2>
                    <p>
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and publishing industries for previewing layouts
                        and visual mockups. Lorem ipsum is placeholder text
                        commonly used in the graphic, print, and publishing industries
                        for previewing layouts and visual mockups. Lorem ipsum is
                        placeholder text commonly used in the graphic, print, and
                        publishing industries for previewing layouts and visual
                        mockups.
                    </p>
                </div>
                <div className={StyleAbout.container}>
                    <div className={StyleAbout.curvedSquare}>
                        <div className={StyleAbout.foodCard}>
                            <img src={CoffeeImg} alt="Hamburger" />
                            <h3>
                                Papa Coffee
                            </h3>
                            <div className={StyleAbout.rating}>⭐⭐⭐⭐</div>
                            <p>$1.40</p>
                        </div>
                        <div className={StyleAbout.foodCard}>
                            <img src={BurgerImg} alt="Sousage Pizza" />
                            <h3>
                                Hamburger
                            </h3>
                            <div className={StyleAbout.rating}>⭐⭐⭐⭐</div>
                            <p>$5.90</p>
                        </div>
                        <div className={StyleAbout.foodCard}>
                            <img src={SoupImg} alt="Tomato Soup" />
                            <h3>Tomato Soup</h3>
                            <div className={StyleAbout.rating}>⭐⭐⭐</div>
                            <p>$7.90</p>
                        </div>
                        <div className={StyleAbout.foodCard}>
                            <img src={PizzaImg} alt="Papa Coffee" />
                            <h3>Sousage Pizza</h3>
                            <div className={StyleAbout.rating}>⭐⭐⭐⭐</div>
                            <p>$7.90</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default About;
