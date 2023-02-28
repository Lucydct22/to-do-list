import React, { useState, useEffect } from "react";
import "./todo.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editTodo, setEditTodo] = useState(null);
  const [editedTodo, setEditedTodo] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (newTodo === "") {
      setError(true);
      return;
    }
    setError(false);
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // const handleEditTodo = (index) => {
  //   setEditTodo(index);
  //   setEditedTodo(todos[index]);
  // };

  // const handleUpdateTodo = (index) => {
  //   const newTodos = [...todos];
  //   newTodos[index] = editedTodo;
  //   setTodos(newTodos);
  //   setEditTodo(null);
  //   setEditedTodo("");
  // };

  // const handleCancelEdit = () => {
  //   setEditTodo(null);
  //   setEditedTodo("");
  // };

  return (
    <div className="todo-container">
      <h1>TO-DO LIST</h1>
      {todos.length === 0 && (
        <p className="error-message center-text">
          No to-do items. Add a new item below!
        </p>
      )}
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {editTodo === index ? (
              <>
                <input
                  type="text"
                  value={editedTodo}
                  onChange={(e) => setEditedTodo(e.target.value)}
                />
                {/* <button onClick={() => handleUpdateTodo(index)}>UPDATE</button>
                <button onClick={handleCancelEdit}>CANCEL</button> */}
              </>
            ) : (
              <>
                {todo}
                {/* <button onClick={() => handleEditTodo(index)}>EDIT</button> */}
                <button onClick={() => handleDeleteTodo(index)}>REMOVE</button>
              </>
            )}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="todo-input"
        placeholder="Please place below the to do list"
      />
      <button onClick={handleAddTodo}>ADD NEW</button>
    </div>
  );
};
export default Todo;
