import React, { useState } from 'react';
import styles from './TaskInput.module.css';

export default function TaskInput({ onAddTask }) {
  let [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task != '') {
      onAddTask(task);
      setTask('');
    } else {
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.name}>Note:</p>
      <input
        className={styles.inputLine}
        value={task}
        type="text"
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button className={styles.addTaskButton} onClick={handleAddTask}>
        Add task
      </button>
    </div>
  );
}
