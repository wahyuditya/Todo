import { useState } from "react";
import "./App.css";
import Filter from "./components/filter";
import TodoForms from "./components/todoForms";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState(["buy a drink", "musicfest"]);

  const handleNewEntry = (newEntry) => {
    setTodos([...todos, newEntry]);
  };

  const handleRemove = (index) => {
    const toRemove = [...todos];
    toRemove.splice(index, 1);
    setTodos(toRemove);
  };

  const saveUpdate = (index, update) => {
    const toUpdate = [...todos];
    toUpdate[index] = update;
    setTodos(toUpdate);
  };

  return (
    <>
      <div className="container">
        <div className="warper">
          <div className="tittle">Todo</div>

          <TodoForms newEntry={handleNewEntry} />

          <Filter />

          <div className="todosWarper">
            {todos.map((tittle, index) => (
              <ul key={index}>
                <Todos
                  tittle={tittle}
                  handleRemove={handleRemove}
                  saveUpdate={saveUpdate}
                  index={index}
                />
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
