import React from 'react';
import ErImg from '../../../assets/images/Rectangle 92.png';
import styles from '../style/Not.module.css';

function Not() {
  return (
    <>
    <div className={styles.container}>
      <img src={ErImg} alt="Error image" className={styles.ima} />
    </div>
    </>
  );
}

export default Not;