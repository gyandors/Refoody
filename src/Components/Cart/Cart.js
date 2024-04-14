import React, { useContext } from 'react';
import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import { CartContext } from '../../Context/CartContext';

export default function Cart(props) {
  const cartCtx = useContext(CartContext);

  let totalAmount = 0;

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartCtx.items.map((item) => {
        totalAmount += item.price;
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );

  return (
    <Modal onClick={props.onClick}>
      {cartItems}
      <section className={styles.section}>
        <span>Total Amount</span>
        <span>{totalAmount}.00</span>
      </section>
      <footer className={styles.footer}>
        <button onClick={props.onClick}>Close</button>
        <button className={styles.order}>Order</button>
      </footer>
    </Modal>
  );
}
