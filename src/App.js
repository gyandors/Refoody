import React from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}
