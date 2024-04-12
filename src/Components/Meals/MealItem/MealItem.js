import React from 'react';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';

export default function MealItem(props) {
  return (
    <li className={styles['meal-item']}>
      <div className={styles['item-details']}>
        <h3>{props.name}</h3>
        <p className={styles.desc}>{props.description}</p>
        <span className={styles.price}>₹ {props.price}.00</span>
      </div>
      <div className={styles['item-form']}>
        <MealItemForm price={props.price} />
      </div>
    </li>
  );
}
