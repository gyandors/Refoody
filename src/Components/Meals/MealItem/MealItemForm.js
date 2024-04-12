import React from 'react';
import styles from './MealItemForm.module.css';
import Input from '../../UI/Input';

export default function MealItemForm(props) {
  return (
    <form className={styles.form}>
      <Input
        label="Amount"
        input={{
          type: 'number',
          min: 1,
          max: 5,
          defaultValue: 1,
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
}
