import React from 'react';
import styles from './Input.module.css';

export default function Input(props) {
  return (
    <div className={styles.input}>
      <label>
        {props.label} <input {...props.input} />
      </label>
    </div>
  );
}
