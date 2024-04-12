import React from 'react';
import { createPortal } from 'react-dom';
import styles from './OverlayModal.module.css';
import Card from './Card';

export default function OverlayModal(props) {
  return (
    <>
      {createPortal(<Backdrop />, document.getElementById('backdrop'))}
      {createPortal(<Overlay />, document.getElementById('overlay'))}
    </>
  );
}

function Backdrop(props) {
  return <div className={styles.backdrop}></div>;
}

function Overlay(props) {
  return (
    <Card className={styles.overlay}>
      <header className={styles.header}>
        <p>Pakora</p>
      </header>
      <section className={styles.section}>
        <h3>Total Amount</h3>
        <span>35.63</span>
      </section>
      <footer className={styles.footer}>
        <button>Close</button>
        <button className={styles.order}>Order</button>
      </footer>
    </Card>
  );
}
