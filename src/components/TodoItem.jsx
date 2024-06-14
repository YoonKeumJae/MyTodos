const TodoItem = ({ text }) => {
  return (
    <li>
      <span>
        {text}
      </span>
      <button>X</button>
      <button>✏️</button>
    </li>
  );
}

export default TodoItem;
