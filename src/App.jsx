import TodoItem from "./components/TodoItem.jsx";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const onChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const value = input.trim();
    if (value === "") return alert("Insert text plz");
    const newItem = {
      id: Math.random(),
      text: value
    }
    setTodos([...todos, newItem]);
    document.querySelector("input").value = "";
  };

  const onDeleteItem = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <>
      <h1>The TODOLIST Project</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Input your todos" onChange={onChange} />
        <button type="submit">OK</button>
      </form>
      <ul>
        {todos.map((todoItem) => {
          return (
            <TodoItem
              item={todoItem}
              key={todoItem.id}
              onDelete={onDeleteItem}
            />
          );
        })}
      </ul>
    </>
  );
}

export default App;
