import React from 'react';
import style from './Checkout.module.css';
import { useTranslation } from 'react-i18next';

function Checkout({ basketProducts }) {
  const { t } = useTranslation();
  const total = basketProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  return (
    <div className={style.checkout} style={{ backgroundColor: total === 0 ? '#a9a8a8' : '#d63626' }}>
      <p>{t('Checkout')}</p>
      <div style={{ color: total === 0 ? '#a9a8a8' : '#d63626' }}>${total.toFixed(2)}</div>
    </div>
  );
}

export default Checkout;
