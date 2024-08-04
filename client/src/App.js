import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error('There was an error fetching tasks!', error));
  }, []);

  const addTask = (task) => {
    axios.post('http://localhost:5000/tasks', { text: task, completed: false })
      .then(response => setTasks([...tasks, response.data]))
      .catch(error => console.error('There was an error adding the task!', error));
  };

  const deleteTask = (id) => {
    axios.delete(`http://localhost:5000/tasks/${id}`)
      .then(() => setTasks(tasks.filter(task => task._id !== id)))
      .catch(error => console.error('There was an error deleting the task!', error));
  };

  const modifyTask = (id, newTask) => {
    axios.put(`http://localhost:5000/tasks/${id}`, { text: newTask, completed: false })
      .then(response => setTasks(tasks.map(task => (task._id === id ? response.data : task))))
      .catch(error => console.error('There was an error modifying the task!', error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My To-Do List</h1>
        <TodoForm addTask={addTask} />
        <TodoList tasks={tasks} deleteTask={deleteTask} modifyTask={modifyTask} />
      </header>
    </div>
  );
}

export default App;