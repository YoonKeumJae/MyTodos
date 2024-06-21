import { useState } from "react";

const useTodo = () => {
  const [todos, setTodos] = useState([]);

  /**
   * @param {string} text - Todo's content
   */
  const addTodo = (text) => {
    const newItem = {
      id: Math.random(),
      text: text,
    };
    setTodos([...todos, newItem]);
  };
  /**
   *
   * @param {number} id - Todo's id
   * @param {string} text - Todo's content to replace
   */
  const updateTodo = (id, text) => {
    const updatedTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, text: text } : todo
    );
    setTodos(updatedTodo);
  };
  /**
   *
   * @param {number} id - Todo's id to remove
   */
  const removeTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const resetTodo = () => {
    setTodos([]);
  };

  return {
    todos,
    addTodo,
    updateTodo,
    removeTodo,
    resetTodo,
  };
};

export default useTodo;
