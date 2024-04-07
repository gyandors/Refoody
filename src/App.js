import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">Refoody</div>
        <div className="cart">
          <i class="fa-solid fa-cart-shopping"></i>
          <span>Your Cart</span>
          <button type="submit">0</button>
        </div>
      </header>
      <section></section>
      <footer></footer>
    </div>
  );
}
