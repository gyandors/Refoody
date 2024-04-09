import React from 'react';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import MealsImage from '../../Assets/meals.jpg';

export default function Header() {
  console.log(styles);
  return (
    <>
      <header className={styles.header}>
        <div className={styles['main-heading']}>
          <h1 className={styles.logo}>Refoody</h1>
          <p>A Gyandors Brand</p>
        </div>
        <HeaderCartButton />
      </header>
      <div className={styles['meals-img']}>
        <img src={MealsImage} alt="Meals backgroung" />
      </div>
    </>
  );
}
