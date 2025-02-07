import React from 'react';
import styles from './TaskItem.module.css';
import completedImage from '../../assets/tick.png';
import crossImage from '../../assets/cross.png';

export default function TaskItem({ task, onRemoveTask, onToggleTask }) {
  return (
    <div className={styles.container}>
      <p
        className={`${styles.text} ${task.isCompleted ? styles.completed : ''}`}
      >
        {task.text}
      </p>
      <div className={styles.buttons}>
        <button
          onClick={() => {
            onToggleTask(task);
          }}
        >
          <img src={completedImage} />
        </button>
        <button
          onClick={() => {
            onRemoveTask(task);
          }}
        >
          <img src={crossImage} />
        </button>
      </div>
    </div>
  );
}
