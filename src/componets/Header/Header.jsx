import React from 'react';
import styles from './Header.module.css';
import ico from '../../assets/rocket.png';

export default function Header({ onClearTasks }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>Tasks</h1>
      <button
        className={styles.clearTasksButton}
        onClick={() => {
          onClearTasks();
        }}
      >
        <img src={ico} alt="" />
      </button>
    </div>
  );
}
