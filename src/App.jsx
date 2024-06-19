import TodoItem from "./components/TodoItem.jsx";
import { useState } from "react";
import styled from "styled-components";
import { BLUE001, GREEN001 } from "./GlobalStyle.js";

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

const Buttons = styled.ul`
  width: 100%;
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const Button = styled.button`
  height: 3rem;
  font-size: 2rem;
  background-color: transparent;
  border: 4px solid ${BLUE001};
  border-radius: 10px;
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

  const onClickClearAll = (e) => {
    e.preventDefault();
    if (todos.length === 0) {
      alert("There's nothing to do");
      return;
    }
    if (confirm("Clear ALL todos??")) {
      setTodos([]);
    }
    return;
  };

  return (
    <Wrapper>
      <Title>Todo</Title>
      <form onSubmit={onSubmit}>
        <Input type="text" placeholder="Input your todos" onChange={onChange} />
        {/* <button type="submit">OK</button> */}
      </form>
      <Buttons>
        <Button onClick={onClickClearAll}>Clear All</Button>
      </Buttons>
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
