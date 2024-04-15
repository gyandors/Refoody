import React, { useContext } from 'react';
import styles from './Cart.module.css';
import CartItems from './CartItems';
import Modal from '../UI/Modal';
import CartContext from '../../Context/CartContext';

export default function Cart(props) {
  const cartCtx = useContext(CartContext);

  const handleAddItem = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };

  const handleRemoveItem = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartCtx.items.map((item) => {
        return (
          <CartItems
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onAddItem={handleAddItem.bind(null, item)}
            onRemoveItem={handleRemoveItem.bind(null, item.id)}
          ></CartItems>
        );
      })}
    </ul>
  );

  const hasItems = cartCtx.items.length > 0;

  return (
    <Modal onClick={props.onClick}>
      {cartItems}
      <section className={styles.section}>
        <span>Total Amount</span>
        <span>₹ {cartCtx.totalAmount}.00</span>
      </section>
      <footer className={styles.footer}>
        <button onClick={props.onClick}>Close</button>
        {hasItems && <button className={styles.order}>Order</button>}
      </footer>
    </Modal>
  );
}
