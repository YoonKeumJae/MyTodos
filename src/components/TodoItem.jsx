import { useState } from "react";
import Styles from "../styles/styledTodoItem";


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
    console.log(item); 
    update(item.id, input);
    setIsEdit(false);
  };

  const onEdit = (e) => {
    e.preventDefault();
    setInput(item.text);
    setIsEdit(true);
  };

  return (
    <Styles.TodoItemWrapper>
      {isEdit ? (
        <>
          <Styles.EditInput onChange={onChangeInput} placeholder={item.text} />
          <Styles.ButtonsWrapper>
            <Styles.DeleteButton onClick={() => setIsEdit(false)}>❌</Styles.DeleteButton>
            <Styles.EditButton onClick={onFinishEdit}>✅</Styles.EditButton>
          </Styles.ButtonsWrapper>
        </>
      ) : (
        <>
          <Styles.ItemText>{item.text}</Styles.ItemText>
          <Styles.ButtonsWrapper>
            <Styles.DeleteButton onClick={() => remove(item.id)}>❌</Styles.DeleteButton>
            <Styles.EditButton onClick={onEdit}>✏️</Styles.EditButton>
          </Styles.ButtonsWrapper>
        </>
      )}
    </Styles.TodoItemWrapper>
  );
};

export default TodoItem;
