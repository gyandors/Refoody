import React from 'react';
import styles from './Cart.module.css';
import Modal from '../UI/Modal';

export default function Cart(props) {
  const cartItems = (
    <ul className={styles['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', quantity: 2, price: 32 }].map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );

  return (
    <Modal onClick={props.onClick}>
      {cartItems}
      <section className={styles.section}>
        <span>Total Amount</span>
        <span>35.63</span>
      </section>
      <footer className={styles.footer}>
        <button onClick={props.onClick}>Close</button>
        <button className={styles.order}>Order</button>
      </footer>
    </Modal>
  );
}
