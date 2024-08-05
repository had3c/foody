import React from 'react';
import StyleHow from '../style/How.module.css';
import PeopleImg from '../../../assets/images/Rectangle 106.png';
import { motion } from 'framer-motion';
import { containerVariants, childVariants, blokVariants, imageVariants, titleVariants, letterVariants, paragraphVariants, wordVariants } from './animationHow';

import { useTranslation } from 'react-i18next';

function How() {

    const {t} = useTranslation()

    const title = t("How it works");
    const paragraphText = t("Delivery may be extended during sale periods. Please refer to the checkout page for an updated estimate for your location. Kindly note that once you have placed an order, it is no longer possible to modify your order. Taxes and duties are included in all product prices.It is possible to place an order with shipment to a different address than your home or billing address when paying with a credit card. Please note that Klarna payments require that your order is shipped to your registered home address.");

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={StyleHow.container}>
            <motion.h1
                variants={titleVariants}
                initial="hidden" animate="visible"
                className={StyleHow.title}>
                {title.split("").map((char, index) => (
                    <motion.span
                        key={char + "-" + index}
                        variants={letterVariants}>
                        {char}
                    </motion.span>
                ))}
            </motion.h1>
            <motion.div
                variants={childVariants}
                className={StyleHow.content}>
                <motion.div
                    variants={paragraphVariants}
                    initial="hidden" animate="visible"
                    className={StyleHow.textSection}>
                    <p>
                        {paragraphText.split(" ").map((word, index) => (
                            <motion.span
                                key={word + "-" + index}
                                variants={wordVariants}
                                style={{ display: "inline-block", marginRight: "4px" }}>
                                {word}
                            </motion.span>
                        ))}
                    </p>
                </motion.div>
                <motion.div
                    variants={childVariants}
                    className={StyleHow.imageContainer}>
                    <motion.div
                        variants={blokVariants}
                        className={StyleHow.blok}></motion.div>
                    <motion.img
                        variants={imageVariants}
                        animate="animate"
                        src={PeopleImg}
                        alt=""
                        className={StyleHow.ima} />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default How;

