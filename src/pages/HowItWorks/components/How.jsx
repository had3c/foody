import React from 'react'
import StyleHow from '../style/How.module.css'
import PeopleImg from '../../../assets/images/Rectangle 106.png'

function How() {
    return (
        <div className={StyleHow.container}>
            <h1 className={StyleHow.title}>How it works</h1>
            <div className={StyleHow.content}>
                <div className={StyleHow.textSection}>
                    <p>Delivery may be extended during sale periods. Please refer to the checkout page for an updated estimate for your location. Kindly note that once you have placed an order, it is no longer possible to modify your order. Taxes and duties are included in all product prices. It is possible to place an order with shipment to a different address than your home or billing address when paying with a credit card. Please note that Klarna payments require that your order is shipped to your registered home address.</p>
                </div>
                <div className={StyleHow.imageContainer}>
                    <div className={StyleHow.blok}></div>
                    <img src={PeopleImg} alt="" className={StyleHow.ima} />
                </div>
            </div>
        </div>
    )
}

export default How