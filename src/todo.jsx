// import React, { useState, useEffect } from "react";
// import "./todo.css";


// const Todo = () => {
  
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState("");
//   const [editTodo, setEditTodo] = useState(null);
//   const [editedTodo, setEditedTodo] = useState("");
//   const [error, setError] = useState(false);
//   const [trash, setTrash] = useState([]);

//   useEffect(() => {
//     const savedTodos = localStorage.getItem("todos");
//     if (savedTodos) {
//       setTodos(JSON.parse(savedTodos));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   const handleAddTodo = () => {
//     if (newTodo === "") {
//       setError(true);
//       return;
//     }
//     setError(false);
//     setTodos([...todos, { text: newTodo, status: "in progress" }]);
//     setNewTodo("");
//   };

//   const handleDeleteTodo = (index) => {
//     const newTodos = [...todos];
//     const deletedTodo = newTodos.splice(index, 1)[0];
//     setTodos(newTodos);
//     setTrash([...trash, deletedTodo]);
//   };

//   const handleEditTodo = (index) => {
//     setEditTodo(index);
//     setEditedTodo(todos[index].text);
//   };

//   const handleUpdateTodo = (index) => {
//     const newTodos = [...todos];
//     newTodos[index] = { ...newTodos[index], text: editedTodo };
//     setTodos(newTodos);
//     setEditTodo(null);
//     setEditedTodo("");
//   };

//   const handleCancelEdit = () => {
//     setEditTodo(null);
//     setEditedTodo("");
//   };

//   const handleInProgress = (index) => {
//     const newTodos = [...todos];
//     newTodos[index] = { ...newTodos[index], status: "in progress" };
//     setTodos(newTodos);
//   };

//   const handleComplete = (index) => {
//     const newTodos = [...todos];
//     newTodos[index] = { ...newTodos[index], status: "complete" };
//     setTodos(newTodos);
//   };

//   const handleRestoreTodo = (index) => {
//     const newTrash = [...trash];
//     const restoredTodo = newTrash.splice(index, 1)[0];
//     setTrash(newTrash);
//     setTodos([...todos, restoredTodo]);
//   };

//   const inProgressTodos = todos.filter((todo) => todo.status === "in progress");
//   const completedTodos = todos.filter((todo) => todo.status === "complete");

//   return (
//     <div className="todo-container">
//       <h1>TO-DO LIST</h1>
//       <img src="assets/todolistbackground.jpg" alt="Logo" />
//       {todos.length === 0 && (
//         <div className="no-todos">No todos yet, add one!</div>
//         )}
//         <div className="input-container">
//         <input
//         type="text"
//         placeholder="Add a todo..."
//         value={newTodo}
//         onChange={(e) => setNewTodo(e.target.value)}
//         />
//         <button onClick={handleAddTodo}>Add</button>
//         {error && <div className="error">Please enter a todo.</div>}
//         </div>
//         {inProgressTodos.length > 0 && (
//         <div className="todos-container">
//         <h2>In Progress</h2>
//         {inProgressTodos.map((todo, index) => (
//         <div key={index} className="todo-item">
//         {editTodo === index ? (
//         <>
//         <input
//         type="text"
//         value={editedTodo}
//         onChange={(e) => setEditedTodo(e.target.value)}
//         />
//         <button onClick={() => handleUpdateTodo(index)}>Save</button>
//         <button onClick={handleCancelEdit}>Cancel</button>
//         </>
//         ) : (
//         <>
//         <div>{todo.text}</div>
//         <div className="todo-actions">
//   <button onClick={() => handleDeleteTodo(index)}>Delete</button>
//   <button onClick={() => handleComplete(index)}>Complete</button>
//   <button onClick={() => setTrash([...trash, todo])} className="trash-button">Trash</button>
// </div>
//         </>
//         )}
//         </div>
//         ))}
//         </div>
//         )}
//         {completedTodos.length > 0 && (
//         <div className="todos-container">
//         <h2>Completed</h2>
//         {completedTodos.map((todo, index) => (
//         <div key={index} className="todo-item">
//         <div>{todo.text}</div>
//         <div className="todo-actions">
//         <button onClick={() => handleRestoreTodo(index)}>Restore</button>
//         </div>
//         </div>
//         ))}
//         </div>
//         )}
//         {trash.length > 0 && (
//         <div className="trash-container">
//         <h2>Trash</h2>
//         {trash.map((todo, index) => (
//         <div key={index} className="todo-item">
//         <div>{todo.text}</div>
//         </div>
//         ))}
//         </div>
//         )}
//         </div>
//         );
//         };
        
//         export default Todo;

import React, { useState, useEffect } from "react";
import "./todo.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editTodo, setEditTodo] = useState(null);
  const [editedTodo, setEditedTodo] = useState("");
  const [error, setError] = useState(false);
  const [trash, setTrash] = useState([]);
  const [showRestorePage, setShowRestorePage] = useState(false);

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
    setTodos([...todos, { text: newTodo, status: "in progress" }]);
    setNewTodo("");
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    const deletedTodo = newTodos.splice(index, 1)[0];
    setTodos(newTodos);
    setTrash([...trash, deletedTodo]);
  };

  const handleEditTodo = (index) => {
    setEditTodo(index);
    setEditedTodo(todos[index].text);
  };

  const handleUpdateTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index] = { ...newTodos[index], text: editedTodo };
    setTodos(newTodos);
    setEditTodo(null);
    setEditedTodo("");
  };

  const handleCancelEdit = () => {
    setEditTodo(null);
    setEditedTodo("");
  };

  const handleInProgress = (index) => {
    const newTodos = [...todos];
    newTodos[index] = { ...newTodos[index], status: "in progress" };
    setTodos(newTodos);
  };

  const handleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index] = { ...newTodos[index], status: "complete" };
    setTodos(newTodos);
  };

  const handleTrashTodo = (index) => {
    const newTodos = [...todos];
    const deletedTodo = newTodos.splice(index, 1)[0];
    setTodos(newTodos);
    setTrash([...trash, deletedTodo]);
  };

  const handleRestoreTodo = (index) => {
    const newTrash = [...trash];
    const restoredTodo = newTrash.splice(index, 1)[0];
    setTrash(newTrash);
    setTodos([...todos, restoredTodo]);
  };

  const inProgressTodos = todos.filter((todo) => todo.status === "in progress");
  const completedTodos = todos.filter((todo) => todo.status === "complete");

  return (
    <div className="todo-container">
      {!showRestorePage ? (
        <>
          <h1>TO-DO LIST</h1>
<div className="add-todo">
<input
type="text"
placeholder="Add New Todo"
value={newTodo}
onChange={(e) => setNewTodo(e.target.value)}
/>
<button onClick={handleAddTodo}>Add</button>
</div>
{error && <p className="error">Please enter a valid todo</p>}
<div className="todo-list">
<h2>In Progress</h2>
{inProgressTodos.map((todo, index) => (
<div key={index} className="todo">
<p className="todo-text">{todo.text}</p>
<div className="todo-actions">
<button onClick={() => handleEditTodo(index)}>Edit</button>
<button onClick={() => handleTrashTodo(index)}>Trash</button>
<button onClick={() => handleComplete(index)}>Done</button>
</div>
</div>
))}
<h2>Complete</h2>
{completedTodos.map((todo, index) => (
<div key={index} className="todo">
<p className="todo-text">{todo.text}</p>
<div className="todo-actions">
<button onClick={() => handleInProgress(index)}>Undo</button>
<button onClick={() => handleTrashTodo(index)}>Trash</button>
</div>
</div>
))}
</div>
{trash.length > 0 && (
<button onClick={() => setShowRestorePage(true)}>
Restore Todo
</button>
)}
</>
) : (
<div className="restore-container">
<h1>Restore Todos</h1>
<button onClick={() => setShowRestorePage(false)}>Back</button>
{trash.map((todo, index) => (
<div key={index} className="todo">
<p className="todo-text">{todo.text}</p>
<div className="todo-actions">
<button onClick={() => handleRestoreTodo(index)}>Restore</button>
</div>
</div>
))}
</div>
)}
</div>
);
};

export default Todo;