import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import style from './style/Checkout.module.css';
import checked from '../../../assets/images/successCheck.svg';

export default function Checkout() {
  const [isCheckedOut, setIsCheckedOut] = useState(false);

  const handleCheckout = () => {
    setIsCheckedOut(true);
  };

  const validationSchema = Yup.object().shape({
    address: Yup.string().required('Delivery Address is required'),
    contact: Yup.string()
      .matches(/^\+994\d{7}$/, 'Must start with +994 and be followed by 7 digits')
      .required('Contact Number is required'),
    paymentMethod: Yup.string().required('Please select a Payment Method'),
  });

  return (
    <div className={style.userCheck}>
      {!isCheckedOut && (
        <div className={style.checkOut}>
          <h3>Checkout</h3>
          <div className={style.form}><Formik
            initialValues={{
              address: '',
              contact: '',
              paymentMethod: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                handleCheckout(values);
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form>

                <label htmlFor="address">Delivery Address</label>
                <Field
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Delivery Address"
                  className={style.input}
                />
                <ErrorMessage name="address" component="div" className={style.error} />

                <label htmlFor="contact">Contact Number</label>
                <Field
                  type="text" id="contact" name="contact" placeholder="+994"
                  className={style.input}
                />
                <ErrorMessage name="contact" component="div" className={style.error} />

                <label>Payment Method</label>
                <div className={style.payment}>
                  <div className={style.pay}>
                    <Field
                      type="radio" id="paymentMethod-thedoor" name="paymentMethod" value="pay at the door"
                    />
                    <label htmlFor="paymentMethod-thedoor">Pay at the door</label>
                  </div>
                  <div className={style.pay}>
                    <Field type="radio" id="paymentMethod-creditcard" name="paymentMethod"
                      value="pay at the door by credit card"
                    />
                    <label htmlFor="paymentMethod-creditcard">Pay at the door by credit card</label>
                  </div>
                </div>

                <button type="submit" disabled={isSubmitting} onClick={handleCheckout}>
                  Checkout
                </button>

              </Form>
            )}
          </Formik></div>

        </div>
      )}

      {!isCheckedOut && (
        <div className={style.orderTotal}>
          <div>
            <h4>Your Order</h4>
            <ul>
              <li>
                <div>
                  <span>1</span>
                  <span>x Papa John’s Pizza Restaurant</span>
                </div>
                <p>$ 8.00</p>
              </li>
            </ul>
          </div>
          <div className={style.total}>
            <h5>Total</h5>
            <p>$ 17.80</p>
          </div>
        </div>
      )}

      {isCheckedOut && (
        <div className={style.orderChecked}>
          <img src={checked} alt="" />
          <p>Your order has been received</p>
        </div>
      )}
    </div>
  );
}
