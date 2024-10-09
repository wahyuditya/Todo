import { useEffect, useState, useSyncExternalStore } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Filter from "./components/filter";
import TodoForms from "./components/todoForms";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);
  // const [todos, setTodos] = useState([
  //   { title: "Read a book", completed: true },
  //   { title: "Watch a movie", completed: false },
  // ]);
  const [filter, setFilter] = useState("all");

  const handleNewEntry = (newEntry) => {
    setTodos([{ id: uuidv4(), title: newEntry, completed: false }, ...todos]);
  };

  const handleRemove = (id) => {
    const toRemove = todos.filter((todo) => todo.id !== id);
    setTodos(toRemove);
  };

  const saveUpdate = (index, update) => {
    const toUpdate = [...todos];
    toUpdate[index].title = update;
    setTodos(toUpdate);
  };

  const markComplete = (index) => {
    const toUpdate = [...todos];
    toUpdate[index].completed = true;
    setTodos(toUpdate);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  });

  return (
    <>
      <div className="container">
        <div className="warper">
          <div className="tittle">Todo</div>

          <TodoForms newEntry={handleNewEntry} />

          <Filter filter={setFilter} />
          <>
            <div className="todosWarper">
              {filteredTodos.map((todo, index) => (
                <ul key={index}>
                  <Todos
                    title={todo.title}
                    handleRemove={handleRemove}
                    saveUpdate={saveUpdate}
                    index={index}
                    markComplete={markComplete}
                    complete={todo.completed}
                    id={todo.id}
                  />
                </ul>
              ))}
            </div>
          </>
        </div>
      </div>
    </>
  );
}

export default App;
