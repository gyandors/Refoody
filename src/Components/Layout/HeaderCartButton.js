import React, { useState, useContext } from 'react';
import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import Cart from '../Cart/Cart';
import { CartContext } from '../../Context/CartContext';

export default function HeaderCartButton() {
  const [openCart, setOpenCart] = useState(false);

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curValue, item) => {
    return curValue + item.quantity;
  }, 0);

  return (
    <>
      {openCart && <Cart onClick={() => setOpenCart(!openCart)} />}
      <button className={styles.button} onClick={() => setOpenCart(!openCart)}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span className={styles.label}>Your Cart</span>
        <span className={styles.count}>{numberOfCartItems}</span>
      </button>
    </>
  );
}
