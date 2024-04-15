import React from 'react';
import styles from './CartItems.module.css';

export default function CartItems(props) {
  return (
    <li className={styles['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>₹ {props.price}.00</span>
          <span className={styles.quantity}>x {props.quantity}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onRemoveItem}>−</button>
        <button onClick={props.onAddItem}>+</button>
      </div>
    </li>
  );
}
