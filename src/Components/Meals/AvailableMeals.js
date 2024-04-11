import React from 'react';
import styles from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Pakora',
    description: 'Pakora is a savory, deep-fried Indian snack',
    price: 50,
  },
  {
    id: 'm2',
    name: 'Chaat',
    description: 'Chaat encompasses a wide variety of Indian street foods',
    price: 80,
  },
  {
    id: 'm3',
    name: 'Vada Pav',
    description: 'Vada Pav is a favorite sandwich-style snack from Mumbai',
    price: 20,
  },
  {
    id: 'm4',
    name: 'Idli',
    description: 'Idli is a traditional, savory Indian cake',
    price: 35,
  },
];

export default function AvailableMeals() {
  return (
    <section className={styles.meals}>
      <ul>
        {DUMMY_MEALS.map((meal) => {
          return (
            <li className={styles['meal-item']}>
              <h3>{meal.name}</h3>
              <p>{meal.description}</p>
              <h4>₹ {meal.price}.00</h4>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
