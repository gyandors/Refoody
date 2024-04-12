import React from 'react';
import styles from './MealItemForm.module.css';

export default function MealItemForm(props) {
  return (
    <form className={styles.form}>
      <label className={styles['amount-control']}>
        Amount
        <input type="text" value={props.price} disabled />
      </label>
      <button type="submit">+ Add</button>
    </form>
  );
}
