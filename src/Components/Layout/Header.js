import React from 'react';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import MealsImage from '../../Assets/meals.jpg';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>Refoody</h1>
          <p>A Gyandors Brand</p>
        </div>
        <HeaderCartButton />
      </header>
      <div className={styles['meals-img']}>
        <img src={MealsImage} alt="Meals background" />
      </div>
    </>
  );
}
