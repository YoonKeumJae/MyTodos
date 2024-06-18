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
      text: value,
    };
    setTodos([...todos, newItem]);
    document.querySelector("input").value = "";
  };

  const onDeleteItem = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-5xl text-blue-500">Jarvis</h1>
      <form onSubmit={onSubmit}>
        <input
          className="border-solid border-2 border-sky-600 rounded-3xl p-4 mt-20 mb-10"
          type="text"
          placeholder="Input your todos"
          onChange={onChange}
        />
        {/* <button type="submit">OK</button> */}
      </form>
      <ul className="bg-green-400 w-2/5 flex flex-col item-center p-5">
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
    </div>
  );
}

export default App;
