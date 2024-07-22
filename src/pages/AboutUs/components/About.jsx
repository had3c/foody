import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import StyleAbout from '../style/About.module.css';
import BurgerImg from '../../../assets/images/burger.png';
import PizzaImg from '../../../assets/images/pizza.png';
import CoffeeImg from '../../../assets/images/cofe.png';
import SoupImg from '../../../assets/images/soup.png';
import {fadeIn , pulse , shift} from './animationAbout'

function About() {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation((prevRotation) => (prevRotation + 1) % 4);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const foodItems = [
        { img: CoffeeImg, name: "Papa Coffee", rating: "⭐⭐⭐⭐", price: "$1.40" },
        { img: BurgerImg, name: "Hamburger", rating: "⭐⭐⭐⭐", price: "$5.90" },
        { img: SoupImg, name: "Tomato Soup", rating: "⭐⭐⭐", price: "$7.90" },
        { img: PizzaImg, name: "Sousage Pizza", rating: "⭐⭐⭐⭐", price: "$7.90" }
    ];

    const getRotatedItem = (index) => {
        return foodItems[(index + rotation) % 4];
    };

    return (
        <div className={StyleAbout.cont}>
            <div className={StyleAbout.content}>
                <motion.div
                    className={StyleAbout.aboutSection}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
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
                </motion.div>
                <div className={StyleAbout.container}>
                    <div className={StyleAbout.curvedSquare}>
                        {[0, 1, 2, 3].map((index) => {
                            const item = getRotatedItem(index);
                            return (
                                <div 
                                    key={index} 
                                    className={StyleAbout.foodCard}
                                >
                                    <motion.img 
                                        src={item.img} 
                                        alt={item.name} 
                                        initial="initial" 
                                        animate="animate" 
                                        variants={pulse}
                                    />
                                    <motion.h3 
                                        initial="initial" 
                                        animate="animate" 
                                        variants={shift}
                                    >
                                        {item.name}
                                    </motion.h3>
                                    <motion.div 
                                        className={StyleAbout.rating} 
                                        initial="initial" 
                                        animate="animate" 
                                        variants={shift}
                                    >
                                        {item.rating}
                                    </motion.div>
                                    <motion.p 
                                        initial="initial" 
                                        animate="animate" 
                                        variants={shift}
                                    >
                                        {item.price}
                                    </motion.p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
