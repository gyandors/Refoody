import React from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import OverlayModal from './Components/UI/OverlayModal';

export default function App() {
  return (
    <>
      <OverlayModal />
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}
