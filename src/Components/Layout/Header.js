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
        <img src={MealsImage} alt="Meals background" />
        <div className={styles.summary}>
          <h1>Delicious Food, Delivered To You</h1>
          <p>
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home.
          </p>
          <p>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs!
          </p>
        </div>
      </div>
    </>
  );
}
