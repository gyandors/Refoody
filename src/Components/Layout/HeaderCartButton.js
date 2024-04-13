import React, { useState } from 'react';
import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import Cart from '../Cart/Cart';

export default function HeaderCartButton() {
  const [openCart, setOpenCart] = useState(false);

  return (
    <>
      {openCart && <Cart onClick={() => setOpenCart(!openCart)} />}
      <button className={styles.button} onClick={() => setOpenCart(!openCart)}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span className={styles.label}>Your Cart</span>
        <span className={styles.count}>0</span>
      </button>
    </>
  );
}
