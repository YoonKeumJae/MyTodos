import { useState } from "react";

const TodoItem = ({ item, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState(item.text);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const onClickCancel = () => {
    if (confirm("Will you cancel editing?")) {
      setIsEdit(false);
      return;
    }
  };

  const onClickDone = () => {
    item.text = input;
    setIsEdit(false);
  };

  return (
    <li>
      {isEdit ? (
        <>
          <input onChange={onChangeInput} placeholder={item.text}/>
          <button onClick={onClickCancel}>X</button>
          <button onClick={onClickDone}>✅</button>
        </>
      ) : (
        <>
          <span>{item.text}</span>
          <button onClick={() => onDelete(item.id)}>X</button>
          <button onClick={onClickEdit}>✏️</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
