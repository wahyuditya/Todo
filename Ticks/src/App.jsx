import { useState } from "react";
import "./App.css";
import Filter from "./components/filter";
import TodoForms from "./components/todoForms";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([
    { title: "buy a drink", complete: false },
    { title: "musicfest", complete: false },
    { title: "Running for your life", complete: true },
  ]);
  const [show, setShow] = useState(todos);

  const handleNewEntry = (newEntry) => {
    setTodos([...todos, { title: newEntry, complete: false }]);
  };

  const handleRemove = (index) => {
    const toRemove = [...todos];
    toRemove.splice(index, 1);
    setTodos(toRemove);
    console.log("in");
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
    setShow(todos);
  };

  const showCompleted = () => {
    let filterd = todos.filter((todo) => todo.complete === true);
    setShow(filterd);
  };

  return (
    <>
      <div className="container">
        <div className="warper">
          <div className="tittle">Todo</div>

          <TodoForms newEntry={handleNewEntry} />

          <Filter filterByAll={showAll} filterByCompleted={showCompleted} />

          <div className="todosWarper">
            {show.map((todo, index) => (
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
        </div>
      </div>
    </>
  );
}

export default App;
