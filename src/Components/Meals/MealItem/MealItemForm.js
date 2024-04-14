import React, { useContext, useRef } from 'react';
import styles from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { CartContext } from '../../../Context/CartContext';

export default function MealItemForm(props) {
  const cartCtx = useContext(CartContext);

  const inputRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      quantity: Number(inputRef.current.value),
      price: props.price * Number(inputRef.current.value),
    });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        label="Amount"
        input={{
          id: 'amount-' + props.id,
          type: 'number',
          min: 1,
          max: 5,
          defaultValue: 1,
          ref: inputRef,
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
}
