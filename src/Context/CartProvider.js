import React, { useReducer } from 'react';
import CartContext from './CartContext';

function cartReducer(state, action) {
  if (action.type === 'ADD') {
    const updatedQuantity =
      state.quantity + action.item.price * action.item.quantity;

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
      quantity: updatedQuantity,
    };
  }
  if (action.type === 'REMOVE') {
    console.log('removeItem');
    // return
  }

  return { items: [], quantity: 0 };
}

export default function CartProvider(props) {
  const [cartState, dispachCartState] = useReducer(cartReducer, {
    items: [],
    quantity: 0,
  });

  const cartContextValue = {
    items: cartState.items,
    totalAmount: cartState.quantity,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  function addItemToCart(item) {
    dispachCartState({ type: 'ADD', item: item });
    console.log(item);
  }

  function removeItemFromCart(id) {
    dispachCartState({ type: 'REMOVE', id: id });
  }

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
}
