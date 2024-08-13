import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';
import { addProduct, removeProduct, updateQuantity } from '../../../redux/features/basketSlice/basketSlice';
import {useSelector } from 'react-redux';
import * as Yup from 'yup';
import style from './style/Checkout.module.css';
import checked from '../../../assets/images/successCheck.svg';

export default function Checkout() {
  const [isCheckedOut, setIsCheckedOut] = useState(false);
  const [orders, setOrders] = useState([]);
  const { t } = useTranslation();
  const basketProducts = useSelector((state) => state.basket.products);

  const handleCheckout = (values) => {
    const exists = orders.some(order => 
      order.address === values.address && 
      order.contact === values.contact && 
      order.paymentMethod === values.paymentMethod
    );

    if (!exists) {
      setOrders([...orders, values]);
    }
    setIsCheckedOut(true);
    setTimeout(() => {
      setIsCheckedOut(false);
    }, 2500); 
  };

  console.log(basketProducts)
  const validationSchema = Yup.object().shape({
    address: Yup.string().required(t('Address Required')),
    contact: Yup.string()
      .matches(/^(?:\+994\d{7}|\+44\d{10}|\+33\d{9})$/, t('Contact is invalid'))
      .required(t('Contact Required')),
    paymentMethod: Yup.string().required(t('Paymethod Required')),
  });

  return (
    <div className={style.userCheck}>
      {!isCheckedOut && (
        <div className={style.checkOut}>
          <h3>{t('Checkout')}</h3>
          <div className={style.form}>
            <Formik
              initialValues={{
                address: '',
                contact: '',
                paymentMethod: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                  handleCheckout(values);
                  resetForm(); 
                  setSubmitting(false);
                }, 200);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                   <div className={style.formik}>
                     <label htmlFor="address">{t('Delivery Address')}</label>
                  <Field
                    type="text"
                    id="address"
                    name="address"
                    placeholder={t('Delivery Address')}
                    className={style.input}
                  />
                  <ErrorMessage name="address" component="div" className={style.error} />  
                   </div>
                  
                  
                 
                    <div className={style.formik}>
                        <label htmlFor="contact">{t('Contact Number')}</label>
                  <Field
                    type="number"
                    id="contact"
                    name="contact"
                    placeholder={t('+44')}
                    className={style.input}
                  />
                  <ErrorMessage name="contact" component="div" className={style.error} />
                    </div>
                     
                   
                 

                  <label>{t('Payment Method')}</label>
                  <div className={style.payment}>
                    <div className={style.pay}>
                      <Field
                        type="radio"
                        id="paymentMethod-thedoor"
                        name="paymentMethod"
                        value="pay at the door"
                      />
                      <label htmlFor="paymentMethod-thedoor">{t('Pay at the door')}</label>
                    </div>
                    <div className={style.pay}>
                      <Field
                        type="radio"
                        id="paymentMethod-creditcard"
                        name="paymentMethod"
                        value="pay at the door by credit card"
                      />
                      <label htmlFor="paymentMethod-creditcard">{t('Pay at the door by credit card')}</label>
                    </div>
                  </div>
                  <ErrorMessage name="paymentMethod" component="div" className={style.error} />
                  <button type="submit" disabled={isSubmitting}>
                    {t('Checkout')}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}

      {!isCheckedOut && (
        <div className={style.orderTotal}>
  <div>
    <h4>{t('Your Order')}</h4>
    <ul>
    {basketProducts.map((product) => (
                <li key={product.id}>
                  <div>
                    <span>{product.quantity}</span>
                    <span>x {product.name}</span>
                  </div>
                  <p>${(product.price * product.quantity).toFixed(2)}</p>
                </li>
              ))}
    </ul>
  </div>
  <div className={style.total}>
    <h5>{t('Total')}</h5>
    <p>
      ${basketProducts.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}
    </p>
  </div>
</div>

      )}

      {isCheckedOut && (
        <div className={style.orderChecked}>
          <img src={checked} alt="Success Check" />
          <p>{t('Your order has been received')}</p>
        </div>
      )}
    </div>
  );
}

