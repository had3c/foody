import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { removeProduct } from '../../../redux/features/basketSlice/basketSlice';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import style from './style/Checkout.module.css';
import checked from '../../../assets/images/successCheck.svg';
import axios from 'axios'
import { v4 } from "uuid";


export default function Checkout() {
  const [isCheckedOut, setIsCheckedOut] = useState(false);
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch()
  const basketProducts = useSelector((state) => state.basket.products);
  const getContactValue = () => {
    switch (i18n.language) {
      case 'az':
        return '+994';
      case 'en':
        return '+44';
      case 'fr':
        return '+33';
      default:
        return '+1';
    }
  };

  const isFriday = new Date().getDay() === 5;
  const uuid = v4().replace(/-/g, "");
  const customerID = JSON.parse(localStorage.getItem('user')).userId;
  const postOrderData = async (values) => {

    const totalPrice = isFriday
      ? (basketProducts.reduce((total, product) => total + product.price * product.quantity, 0) * 0.85).toFixed(2)
      : (basketProducts.reduce((total, product) => total + product.price * product.quantity, 0)).toFixed(2);

    const newContact = getContactValue() + values.contact + "";
    const orderData = {
      "fields": {
        "amount": {
          "stringValue": totalPrice + ""
        },
        "contactNumber": {
          "stringValue": newContact
        },
        "customerID": {
          "stringValue": customerID + ""
        },
        "deliveryAddress": {
          "stringValue": values.address
        },
        "id": {
          "stringValue": uuid + ""
        },
        "paymentMethod": {
          "stringValue": values.paymentMethod
        },
        "time": {
          "stringValue": new Date().getTime() + ""
        },
        "restaurantName": {
          "stringValue": basketProducts[0].restaurant
        },
        "totalPrice": {
          "stringValue": totalPrice
        },
        basket: {
          arrayValue: {
            values: basketProducts.map(product => ({
              mapValue: {
                fields: {
                  id: { stringValue: product.id.toString() },
                  name: { stringValue: product.name },
                  price: { stringValue: product.price + "" },
                  quantity: { stringValue: product.quantity + "" },
                  image: { stringValue: product.image },
                }
              }
            })),
          },
        },
      }
    };
    try {
      await axios.patch(`https://firestore.googleapis.com/v1/projects/${import.meta.env.VITE_PROJECT_ID}/databases/(default)/documents/orders/` + uuid + "", orderData);
    } catch (error) {
      console.error('Error sending order to Firestore:', error);
    }
  };
  const handleCheckout = async (values) => {
    await postOrderData(values);
    setIsCheckedOut(true);
    setTimeout(() => {
      setIsCheckedOut(false);
    }, 2500);

    basketProducts.forEach(product => {
      dispatch(removeProduct(product.id));
    });
  };

  const validationSchema = Yup.object().shape({
    address: Yup.string().required(t('Address Required')),
    contact: Yup.number()
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
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                await handleCheckout(values);
                resetForm();
                setSubmitting(false);
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
                  <button type="submit" disabled={isSubmitting || basketProducts.length == 0} className={basketProducts.length !== 0 ? style.checkButton : style.checkButtonDisable}>
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
          {isFriday ? <div className={style.discount}>{t('Friday Discount')} - 15%</div> : null}
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
          <div>
          </div>
          <div className={style.total}>
            <h5>{t('Total')}</h5>
            <p>
              ${basketProducts.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}
            </p>
            {isFriday ? <span className={style.lastTotal}>${(basketProducts.reduce((total, product) => total + product.price * product.quantity, 0) * 0.85).toFixed(2)}</span> : null}
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

