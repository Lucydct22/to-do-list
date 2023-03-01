

// import React, { useState, useEffect } from "react";
// import "./todo.css";



// const Todo = () => {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState("");
//   const [editTodo, setEditTodo] = useState(null);
//   const [editedTodo, setEditedTodo] = useState("");
//   const [error, setError] = useState(false);

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
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
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

//   const inProgressTodos = todos.filter((todo) => todo.status === "in progress");
//   const completedTodos = todos.filter((todo) => todo.status === "complete");

//   return (
    
//     <div className="todo-container">
//       <h1>TO-DO LIST</h1>
//       <img src="assets/todolistbackground.jpg" alt="Logo" />
//       {todos.length === 0 && <p className="error-message">No to-do items. Add a new item below!</p>}
//       <div>
//         <h2>In Progress</h2>
//         <ul className="todo-list">
//           {inProgressTodos.map((todo, index) => (
//             <li key={index}>
//               {editTodo === index ? (
//                 <>
//                   <input
//                     type="text"
//                     value={editedTodo}
//                     onChange={(e) => setEditedTodo(e.target.value)}
//                   />
//                   <button onClick={() => handleUpdateTodo(index)}>UPDATE</button>
//                   <button onClick={handleCancelEdit}>CANCEL</button>
//                 </>
//               ) : (
//                 <>
//                   {todo.text}
//                   <button onClick={() => handleEditTodo(index)}>EDIT</button>
//                   <button onClick={() => handleComplete(index)}>COMPLETE</button>
//                   <button onClick={() => handleDeleteTodo(index)}>REMOVE</button>
//                 </>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h2>Completed</h2>
//         <ul className="todo-list">
//           {completedTodos.map((todo, index) => (
//             <li key={index}>
//               {todo.text}
// <button onClick={() => handleInProgress(index)}>IN PROGRESS</button>
// <button onClick={() => handleDeleteTodo(index)}>REMOVE</button>
// </li>
// ))}
// </ul>
// </div>
// <div className="add-todo">
// <input
// type="text"
// value={newTodo}
// onChange={(e) => setNewTodo(e.target.value)}
// placeholder="Add a new to-do item"
// />
// <button onClick={handleAddTodo}>ADD</button>
// {error && <p className="error-message">Please enter a to-do item.</p>}
// </div>
// </div>
// );
// };

// export default Todo;

import React, { useState, useEffect } from "react";
import "./todo.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editTodo, setEditTodo] = useState(null);
  const [editedTodo, setEditedTodo] = useState("");
  const [error, setError] = useState(false);
  const [trash, setTrash] = useState([]);

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
      <h1>TO-DO LIST</h1>
      <img src="assets/todolistbackground.jpg" alt="Logo" />
      {todos.length === 0 && (
        <div className="no-todos">No todos yet, add one!</div>
        )}
        <div className="input-container">
        <input
        type="text"
        placeholder="Add a todo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
        {error && <div className="error">Please enter a todo.</div>}
        </div>
        {inProgressTodos.length > 0 && (
        <div className="todos-container">
        <h2>In Progress</h2>
        {inProgressTodos.map((todo, index) => (
        <div key={index} className="todo-item">
        {editTodo === index ? (
        <>
        <input
        type="text"
        value={editedTodo}
        onChange={(e) => setEditedTodo(e.target.value)}
        />
        <button onClick={() => handleUpdateTodo(index)}>Save</button>
        <button onClick={handleCancelEdit}>Cancel</button>
        </>
        ) : (
        <>
        <div>{todo.text}</div>
        <div className="todo-actions">
        <button onClick={() => handleEditTodo(index)}>Edit</button>
        <button onClick={() => handleDeleteTodo(index)}>Delete</button>
        <button onClick={() => handleComplete(index)}>Complete</button>
        </div>
        </>
        )}
        </div>
        ))}
        </div>
        )}
        {completedTodos.length > 0 && (
        <div className="todos-container">
        <h2>Completed</h2>
        {completedTodos.map((todo, index) => (
        <div key={index} className="todo-item">
        <div>{todo.text}</div>
        <div className="todo-actions">
        <button onClick={() => handleRestoreTodo(index)}>Restore</button>
        </div>
        </div>
        ))}
        </div>
        )}
        {trash.length > 0 && (
        <div className="trash-container">
        <h2>Trash</h2>
        {trash.map((todo, index) => (
        <div key={index} className="todo-item">
        <div>{todo.text}</div>
        </div>
        ))}
        </div>
        )}
        </div>
        );
        };
        
        export default Todo;