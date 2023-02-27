// import React, { useState } from "react";

// const Todo = () => {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState("");

//   const handleAddTodo = () => {
//     setTodos([...todos, newTodo]);
//     setNewTodo("");
//   };

//   const handleDeleteTodo = (index) => {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//   };

//   return (
//     <div>
//       <h1>To-Do List</h1>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo}
//             <button onClick={() => handleDeleteTodo(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <input
//         type="text"
//         value={newTodo}
//         onChange={(e) => setNewTodo(e.target.value)}
//       />
//       <button onClick={handleAddTodo}>Add</button>
//     </div>
//   );
// };

// export default Todo;

// import React, { useState } from "react";
// import "./todo.css";

// const Todo = () => {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState("");

//   const handleAddTodo = () => {
//     setTodos([...todos, newTodo]);
//     setNewTodo("");
//   };

//   const handleDeleteTodo = (index) => {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//   };

//   return (
//     <div className="todo-container">
//       <h1>To-Do List</h1>
//       <ul className="todo-list">
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo}
//             <button onClick={() => handleDeleteTodo(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <input
//         type="text"
//         value={newTodo}
//         onChange={(e) => setNewTodo(e.target.value)}
//         className="todo-input"
//         placeholder="Add a new todo item"
//       />
//       <button onClick={handleAddTodo}>Add</button>
//     </div>
//   );
// };

// export default Todo;

// Note that in the Todo.js file, we've added className attributes to the div, ul, li, button, and input elements to apply the styles from the Todo.css file. We've also added a placeholder attribute to the input element to give users an idea of what to input.

import React, { useState, useEffect } from "react";
import "./todo.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editTodo, setEditTodo] = useState(null);
  const [editedTodo, setEditedTodo] = useState("");

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
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleEditTodo = (index) => {
    setEditTodo(index);
    setEditedTodo(todos[index]);
  };

  const handleUpdateTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index] = editedTodo;
    setTodos(newTodos);
    setEditTodo(null);
    setEditedTodo("");
  };

  const handleCancelEdit = () => {
    setEditTodo(null);
    setEditedTodo("");
  };

  return (
    <div className="todo-container">
      <h1>TO-DO LIST</h1>
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
                <button onClick={() => handleUpdateTodo(index)}>UPDATE</button>
                <button onClick={handleCancelEdit}>CANCEL</button>
              </>
            ) : (
              <>
                {todo}
                <button onClick={() => handleEditTodo(index)}>EDIT</button>
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
        placeholder="Please fill the gap to complete de to do items "
      />
      <button onClick={handleAddTodo}>ADD NEW</button>
    </div>
  );
};

export default Todo;
