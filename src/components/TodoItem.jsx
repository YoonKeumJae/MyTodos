import { useState, useCallback } from "react";
import Styles from "@styles/styledTodoItem";

const TodoItem = ({ item, update, remove }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState("");

  const onChangeInput = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const onFinishEdit = useCallback(() => {
    if (input === "") {
      alert("Insert text plz");
      return;
    }
    update(item.id, input);
    setIsEdit(false);
  }, [input, item.id, update]);

  const onEdit = useCallback(
    (e) => {
      e.preventDefault();
      setInput(item.text);
      setIsEdit(true);
    },
    [item.text]
  );

  return (
    <Styles.TodoItemWrapper>
      {isEdit ? (
        <>
          <Styles.EditInput onChange={onChangeInput} placeholder={item.text} />
          <Styles.ButtonsWrapper>
            <Styles.DeleteButton onClick={() => setIsEdit(false)}>
              ❌
            </Styles.DeleteButton>
            <Styles.EditButton onClick={onFinishEdit}>✅</Styles.EditButton>
          </Styles.ButtonsWrapper>
        </>
      ) : (
        <>
          <Styles.ItemText>{item.text}</Styles.ItemText>
          <Styles.ButtonsWrapper>
            <Styles.DeleteButton onClick={() => remove(item.id)}>
              ❌
            </Styles.DeleteButton>
            <Styles.EditButton onClick={onEdit}>✏️</Styles.EditButton>
          </Styles.ButtonsWrapper>
        </>
      )}
    </Styles.TodoItemWrapper>
  );
};

export default TodoItem;
