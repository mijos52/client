import { useState, useEffect } from "react";

const API_BASE = "http://localhost:3000"


function App() {
  const [todos, setTodos] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    GetTodos();
    console.log(todos)

  }, [])

  const GetTodos = () => {
    fetch(API_BASE + "/todo").then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.log("Error", err))
  }

  return (
    <div className="App">

      <h1>Welcome, Hi</h1>
      <h4>Your todos</h4>
      <div className="todos">
        {todos.map(todo => (

          <div className="todo" key={todo._id}>

            <div className="checkbox">checkbox</div>
            <div className="text">{todo.text}</div>
            <div className="delete-todo">delete</div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
