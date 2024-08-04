import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, deleteTask, modifyTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem
          key={task._id}
          task={task} // Pass the entire task object
          deleteTask={deleteTask}
          modifyTask={modifyTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;
