import TodoItem from "@components/TodoItem.jsx";
import { useState, useRef, useEffect } from "react";
import useTodo from "@hooks/useTodo.js";
import Styles from "@styles/styledApp.js";

function App() {
  const [input, setInput] = useState("");
  const { todos, addTodo, resetTodo, updateTodo, removeTodo } = useTodo();
  const inputField = useRef();

  useEffect(() => {
    inputField.current.focus();
  }, []);

  const onChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const value = input.trim();
    if (value === "") return alert("Insert text plz");
    addTodo(value);
    setInput("");
    inputField.current.value = "";
  };

  const onClickClearAll = (e) => {
    e.preventDefault();
    if (todos.length === 0) {
      alert("There's nothing to do");
      return;
    }
    if (confirm("Clear ALL todos??")) {
      resetTodo();
    }
    return;
  };

  return (
    <Styles.Wrapper>
      <Styles.Title>Todo</Styles.Title>
      <form onSubmit={onSubmit}>
        <Styles.Input
          type="text"
          placeholder="Input your todos"
          onChange={onChange}
          ref={inputField}
        />
      </form>
      <Styles.Buttons>
        <Styles.Button onClick={onClickClearAll}>Clear All</Styles.Button>
      </Styles.Buttons>
      <Styles.TodoWrapper>
        {todos.map((todoItem) => {
          return (
            <TodoItem
              item={todoItem}
              key={todoItem.id}
              update={updateTodo}
              remove={removeTodo}
            />
          );
        })}
      </Styles.TodoWrapper>
    </Styles.Wrapper>
  );
}

export default App;
