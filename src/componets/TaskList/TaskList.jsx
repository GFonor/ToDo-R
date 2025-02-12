import React from 'react';
import styles from './TaskList.module.css';
import TaskItem from '../TaskItem/TaskItem.jsx';

export default function TaskList({ tasks, onRemoveTask, onToggleTask }) {
  return (
    <div className={styles.container}>
      {tasks.length ? (
        tasks.map((task) => (
          <TaskItem
            task={task}
            onRemoveTask={onRemoveTask}
            onToggleTask={onToggleTask}
            key={task.id}
          />
        ))
      ) : (
        <div className={styles.emptyTaskList}>Here will be shown your task</div>
      )}
    </div>
  );
}
