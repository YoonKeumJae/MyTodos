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
    setTodos([...todos, value]);
    document.querySelector("input").value = "";
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
          return <TodoItem text={todoItem} key={todos.indexOf(todoItem)} />;
        })}
      </ul>
    </>
  );
}

export default App;
