import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import StyleAbout from '../style/About.module.css';
import BurgerImg from '../../../assets/images/burger.png';
import PizzaImg from '../../../assets/images/pizza.png';
import CoffeeImg from '../../../assets/images/cofe.png';
import SoupImg from '../../../assets/images/soup.png';

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

    const abou = "About Us"
    const text = "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.";

    return (
        <div className={StyleAbout.cont}>
            <div className={StyleAbout.content}>
                <div className={StyleAbout.aboutSection}>
                    <motion.h2>
                        {abou.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.05,
                                    delay: index * 0.03,
                                    ease: "easeInOut"
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}

                    </motion.h2>
                    <motion.p>
                        {text.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.015,
                                    delay: index * 0.009,
                                    ease: "easeInOut"
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.p>
                </div>
                <div className={StyleAbout.container}>
                    <div className={StyleAbout.curvedSquare}>
                        {[0, 1, 2, 3].map((index) => {
                            const item = getRotatedItem(index);
                            return (
                                <motion.div
                                    key={index}
                                    className={StyleAbout.foodCard}
                                    animate={{
                                        x: ['-5%', '0%', '-5%'],
                                        rotate: [70, 70, 70]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <div className={StyleAbout.foodCardContent}>
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                        />
                                        <h3>{item.name}</h3>
                                        <div className={StyleAbout.rating}>
                                            {item.rating}
                                        </div>
                                        <p>{item.price}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;