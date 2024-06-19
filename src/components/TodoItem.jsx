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

const TodoItem = ({ item, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState("");

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const onClickCancel = () => {
    setIsEdit(false);
  };

  const onClickDone = () => {
    if (input === "") {
      alert("Insert text plz");
      return;
    }
    item.text = input;
    setIsEdit(false);
  };

  return (
    <TodoItemWrapper>
      {isEdit ? (
        <>
          <EditInput onChange={onChangeInput} placeholder={item.text} />
          <ButtonsWrapper>
            <DeleteButton onClick={onClickCancel}>❌</DeleteButton>
            <EditButton onClick={onClickDone}>✅</EditButton>
          </ButtonsWrapper>
        </>
      ) : (
        <>
          <ItemText>{item.text}</ItemText>
          <ButtonsWrapper>
            <DeleteButton onClick={() => onDelete(item.id)}>❌</DeleteButton>
            <EditButton onClick={onClickEdit}>✏️</EditButton>
          </ButtonsWrapper>
        </>
      )}
    </TodoItemWrapper>
  );
};

export default TodoItem;
