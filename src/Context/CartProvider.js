import React, { useReducer } from 'react';
import CartContext from './CartContext';

function cartReducer(state, action) {
  if (action.type === 'ADD') {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + action.item.quantity,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else updatedItems = state.items.concat(action.item);

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'REMOVE') {
    let updatedTotalAmount;
    let updatedItems;
    updatedItems = state.items.map((i) => {
      if (i.id === action.id) {
        updatedTotalAmount = state.totalAmount - i.price;
        return { ...i, quantity: i.quantity - 1 };
      }
      return i;
    });

    updatedItems = updatedItems.filter((i) => i.quantity !== 0);

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return { items: [], totalAmount: 0 };
}

export default function CartProvider(props) {
  const [cartState, dispachCartState] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });

  function addItemToCart(item) {
    dispachCartState({ type: 'ADD', item: item });
  }

  function removeItemFromCart(id) {
    dispachCartState({ type: 'REMOVE', id: id });
  }

  const cartContextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
}
