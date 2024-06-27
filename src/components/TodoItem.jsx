import { useState, useCallback, useRef } from "react";
import Styles from "@styles/styledTodoItem";

const TodoItem = ({ item, update, remove }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState("");

  const modifyInput = useRef();

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

  const onKeyPress = useCallback(
    (e) => {
      if (e.key === "Enter") onFinishEdit();
      if (e.key === "Escape") setIsEdit(false);
    },
    [onFinishEdit, setIsEdit]
  );

  const onEdit = useCallback(
    async (e) => {
      e.preventDefault();
      setInput(item.text);
      setIsEdit(true);
      await new Promise((resolve) => setTimeout(resolve, 0));
      modifyInput.current.focus();
    },
    [item.text]
  );

  return (
    <Styles.TodoItemWrapper tabIndex="0">
      {isEdit ? (
        <>
          <Styles.EditInput
            onChange={onChangeInput}
            placeholder={item.text}
            ref={modifyInput}
            onKeyDown={onKeyPress}
          />
          <Styles.ButtonsWrapper>
            <Styles.DeleteButton onClick={() => setIsEdit(false)} tabIndex="1">
              ❌
            </Styles.DeleteButton>
            <Styles.EditButton onClick={onFinishEdit} tabIndex="1">
              ✅
            </Styles.EditButton>
          </Styles.ButtonsWrapper>
        </>
      ) : (
        <>
          <Styles.ItemText>{item.text}</Styles.ItemText>
          <Styles.ButtonsWrapper>
            <Styles.DeleteButton onClick={() => remove(item.id)} tabIndex="1">
              ❌
            </Styles.DeleteButton>
            <Styles.EditButton onClick={onEdit} tabIndex="1">
              ✏️
            </Styles.EditButton>
          </Styles.ButtonsWrapper>
        </>
      )}
    </Styles.TodoItemWrapper>
  );
};

export default TodoItem;
