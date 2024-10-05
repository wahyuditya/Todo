import { useState } from "react";
import {v4 as uuidv4} from "uuid";
import "./App.css";
import Filter from "./components/filter";
import TodoForms from "./components/todoForms";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [isComplete, setIscomplete] = useState(false);

  const handleNewEntry = (newEntry) => {
    setTodos([...todos, { id: uuidv4(), title: newEntry, complete: false }]);
   
  };

  const handleRemove = (id) => {
    // const toRemove = [...todos];
    setTodos(todos.filter((todo) => todo.id !== id))

  };

  const saveUpdate = (index, update) => {
    const toUpdate = [...todos];
    toUpdate[index].title = update;
    setTodos(toUpdate);
  };

  const markComplete = (index) => {
    const toUpdate = [...todos];
    toUpdate[index].complete = true;
    setTodos(toUpdate);
  };

  const showAll = () => {
    setIscomplete(false);
  };

  const showCompleted = () => {
    setIscomplete(true);
  };

  return (
    <>
      <div className="container">
        <div className="warper">
          <div className="tittle">Todo</div>

          <TodoForms newEntry={handleNewEntry} />

          <Filter filterByAll={showAll} filterByCompleted={showCompleted} />

          {isComplete ? (
            <>
              <div className="todosWarper">
                {todos
                  .filter((todo) => todo.complete === true)
                  .map((todo, index) => (
                    <ul key={index}>
                      <Todos
                        title={todo.title}
                        handleRemove={handleRemove}
                        saveUpdate={saveUpdate}
                        index={index}
                        markComplete={markComplete}
                        complete={todo.complete}
                        id={todo.id}
                      />
                    </ul>
                  ))}
              </div>
            </>
          ) : (
            <>
              {" "}
              <div className="todosWarper">
                {todos.map((todo, index) => (
                  <ul key={index}>
                    <Todos
                      title={todo.title}
                      handleRemove={handleRemove}
                      saveUpdate={saveUpdate}
                      index={index}
                      markComplete={markComplete}
                      complete={todo.complete}
                      id={todo.id}
                    />
                  </ul>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
