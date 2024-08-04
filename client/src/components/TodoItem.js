import React, { useState } from 'react';

function TodoItem({ task, deleteTask, modifyTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      modifyTask(task._id, newText);
    }
  };

  return (
    <li>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span>{task.text}</span> // Access the text property of the task object
      )}
      <button onClick={() => deleteTask(task._id)}>Delete</button>
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}

export default TodoItem;
