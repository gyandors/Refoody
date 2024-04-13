import React from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import Card from './Card';

export default function Modal(props) {
  const portalElement = document.getElementById('overlays');

  return (
    <>
      {createPortal(<Backdrop onClick={props.onClick} />, portalElement)}
      {createPortal(
        <Overlay onClick={props.onClick}>{props.children}</Overlay>,
        portalElement
      )}
    </>
  );
}

function Backdrop(props) {
  return <div className={styles.backdrop} onClick={props.onClick}></div>;
}

function Overlay(props) {
  return <Card className={styles.overlay}>{props.children}</Card>;
}
