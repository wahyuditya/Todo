import { useState } from "react";

function TodosForms() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const todoList = todos.map((list, index) => `${index}. ${list}`);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const addNewTodo = () => {
    setTodos([...todos, todo]);
    setTodo("");
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      addNewTodo();
    }
  };

  return (
    <>
      <div className="form">
        <input
          value={todo}
          onChange={handleChange}
          onKeyDown={handleEnter}
          placeholder="What's your todo"
          type="text"
        />
        <button onClick={addNewTodo}>Add</button>
      </div>
    </>
  );
}

export default TodosForms;
