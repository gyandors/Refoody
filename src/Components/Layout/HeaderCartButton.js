import React from 'react';
import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

export default function HeaderCartButton() {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span className={styles.label}>Your Cart</span>
      <span className={styles.count}>0</span>
    </button>
  );
}
