import { useState } from "react";
import "./App.css";
import Filter from "./components/filter";
import TodoForms from "./components/todoForms";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  const handleNewEntry = (newEntry) => {
    setTodos([...todos, newEntry]);
  };

  const handleRemove = (index) => {
    // const remove = todos;
    // remove.splice(index, 1);
    // setTodos(remove);
    console.log("in");
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
                <Todos tittle={tittle} handleRemove={handleRemove} />
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
