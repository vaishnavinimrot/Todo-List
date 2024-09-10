import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);


  const handleAddOrUpdate = () => {
    if (newTodo.trim() !== '') {
      if (isEditing) {
        const updatedTodos = [...todos];
        updatedTodos[currentIndex] = newTodo;
        setTodos(updatedTodos);
        setIsEditing(false);
        setCurrentIndex(null);
      } else {
        setTodos([...todos, newTodo]);
      }
      setNewTodo('');  
    }
  };

 
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    setNewTodo(todos[index]);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const clearTodos = () => {
    setTodos([]);
    setNewTodo('');
    setIsEditing(false);
    setCurrentIndex(null);
  };

  return (
    <div class="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Todo List</h1>

      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter a task"
        style={{ padding: '10px', width: '250px' }}
      />
      <button onClick={handleAddOrUpdate} class="primary-btn">
        {isEditing ? 'Update Task' : 'Add Task'}
      </button>

      <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {todo}
            <button onClick={() => editTodo(index)} class="edit-btn">
              Edit
            </button>
            <button onClick={() => deleteTodo(index)} class="delete-btn">
              Delete
            </button>
          </li>
        ))}
      </ul>

      {todos.length > 0 && (
        <button onClick={clearTodos} class="clear-btn">
          Clear All Tasks
        </button>
      )}
    </div>
  );
}

export default App;
