import { useState, useSyncExternalStore } from "react";
import "./App.css";
import Filter from "./components/filter";
import TodoForms from "./components/todoForms";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [isComplete, setIscomplete] = useState(false);
  const [filter, setFilter] = useState("");

  const handleNewEntry = (newEntry) => {
    setTodos([...todos, { title: newEntry, complete: false }]);
  };

  const handleRemove = (index) => {
    const toRemove = [...todos];
    toRemove.splice(index, 1);
    setTodos(toRemove);
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

  const filterTodo = (status) => {
    if (status === "completed") {
      console.log("completed");
    } else if (status === "incomplete") {
      console.log("incomplete");
    } else {
      console.log("all");
    }
  };

  const showIncomplete = () => {
    setFilter("_completed");
    console.log(filter);
    filterTodo(filter);
  };

  return (
    <>
      <div className="container">
        <div className="warper">
          <div className="tittle">Todo</div>

          <TodoForms newEntry={handleNewEntry} />

          <Filter
            filterByAll={showAll}
            filterByCompleted={showCompleted}
            filterByIncomplete={showIncomplete}
          />

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
