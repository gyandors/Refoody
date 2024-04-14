import React, { useState } from 'react';
import { CartContext } from './CartContext';

export default function CartProvider(props) {
  const [items, setItems] = useState([]);

  function addItemToCart(item) {
    setItems((prevItems) => {
      return [...prevItems, item];
    });
  }

  function removeItemFromCart(id) {}

  const cartContextValue = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
}
