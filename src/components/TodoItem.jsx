import { useState } from "react";
import styled from "styled-components";
import { BLUE001, BLUE002 } from "../GlobalStyle";

const TodoItemWrapper = styled.li`
  width: 100%;
  height: 4rem;
  margin-bottom: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 4px solid ${BLUE002};
  border-radius: 10px;
`;

const ItemText = styled.span`
  font-size: 2rem;
`;

const ButtonsWrapper = styled.div``;

const DeleteButton = styled.button`
  padding: 10px;
  border: 2px solid ${BLUE001};
  border-radius: 40%;
  background-color: transparent;
  margin-right: 10px;
`;

const EditButton = styled.button`
  padding: 10px;
  border: 2px solid ${BLUE001};
  border-radius: 40%;
  background-color: transparent;
`;

const EditInput = styled.input`
  border: none;
  margin: 40px 0;
  font-size: 2rem;
  border-radius: 12px;
  &:focus {
    outline: none;
  }
`;

const TodoItem = ({ item, update, remove }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState("");

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const onFinishEdit = () => {
    console.log(input);
    if (input === "") {
      alert("Insert text plz");
      return;
    }
    console.log(item); //TODO: correct update logic
    update(item.id, input);
    setIsEdit(false);
  };

  const onEdit = (e) => {
    e.preventDefault();
    setInput(item.text);
    setIsEdit(true);
  };

  return (
    <TodoItemWrapper>
      {isEdit ? (
        <>
          <EditInput onChange={onChangeInput} placeholder={item.text} />
          <ButtonsWrapper>
            <DeleteButton onClick={() => setIsEdit(false)}>❌</DeleteButton>
            <EditButton onClick={onFinishEdit}>✅</EditButton>
          </ButtonsWrapper>
        </>
      ) : (
        <>
          <ItemText>{item.text}</ItemText>
          <ButtonsWrapper>
            <DeleteButton onClick={() => remove(item.id)}>❌</DeleteButton>
            <EditButton onClick={onEdit}>✏️</EditButton>
          </ButtonsWrapper>
        </>
      )}
    </TodoItemWrapper>
  );
};

export default TodoItem;
