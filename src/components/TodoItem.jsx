const TodoItem = ({ item, onDelete }) => {
  return (
    <li>
      <span>{item.text}</span>
      <button onClick={()=>onDelete(item.id)}>X</button>
      <button>✏️</button>
    </li>
  );
};

export default TodoItem;
