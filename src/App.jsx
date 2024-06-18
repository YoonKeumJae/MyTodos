import TodoItem from "./components/TodoItem.jsx";
import { useState } from "react";
import styled from "styled-components";
import { GREEN001 } from "./GlobalStyle.js";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 20%;
  background-color: ${GREEN001};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 3rem;
  margin-top: 80px;
`;

const Input = styled.input`
  border: none;
  margin: 40px 0;
  font-size: 2rem;
  border-radius: 12px;
  padding: 15px;
  &:focus {
    outline: none;
  }
`;

const TodoWrapper = styled.ul`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
    <Wrapper>
      <Title>Todo</Title>
      <form onSubmit={onSubmit}>
        <Input type="text" placeholder="Input your todos" onChange={onChange} />
        {/* <button type="submit">OK</button> */}
      </form>
      <TodoWrapper>
        {todos.map((todoItem) => {
          return (
            <TodoItem
              item={todoItem}
              key={todoItem.id}
              onDelete={onDeleteItem}
            />
          );
        })}
      </TodoWrapper>
    </Wrapper>
  );
}

export default App;
