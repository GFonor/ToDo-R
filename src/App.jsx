import { useEffect, useState } from 'react';
import './App.css';
import './componets/TaskItem/TaskItem.jsx';
import Header from './componets/Header/Header.jsx';
import TaskInput from './componets/TaskInput/TaskInput.jsx';
import TaskList from './componets/TaskList/TaskList.jsx';

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasksList')) || []
  );

  const addTask = (task) => {
    let upToDateTaskList = [
      ...tasks,
      { id: Date.now(), text: task, isCompleted: false },
    ];
    setTasks(upToDateTaskList);
    localStorage.setItem('tasksList', JSON.stringify(upToDateTaskList));
  };

  const removeTask = (taskToChange) => {
    let upToDateTaskList = tasks.filter((task) => task.id !== taskToChange.id);
    setTasks(upToDateTaskList);
    localStorage.setItem('tasksList', JSON.stringify(upToDateTaskList));
  };

  const toggleTaskCompleted = (taskToChange) => {
    let upToDateTaskList = tasks.map((task) =>
      task.id === taskToChange.id
        ? { ...task, isCompleted: !task.isCompleted }
        : task
    );

    setTasks(upToDateTaskList);
    localStorage.setItem('tasksList', JSON.stringify(upToDateTaskList));
  };

  const clearTasks = () => {
    setTasks([]);
    localStorage.setItem('tasksList', JSON.stringify([]));
  };

  // useEffect(() => {
  //   console.log(tasks);
  //   console.log(tasks[0]);
  // }, [tasks]);

  return (
    <div className="container">
      <div className="main">
        <Header onClearTasks={clearTasks} style={{ margin: '10px' }} />
        <TaskInput onAddTask={addTask} />

        <TaskList
          tasks={tasks}
          onRemoveTask={removeTask}
          onToggleTask={toggleTaskCompleted}
        />
      </div>
    </div>
  );
}

export default App;
