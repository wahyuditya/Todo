import { useState } from "react";
import "./App.css";
import Filter from "./components/filter";
import TodoForms from "./components/todoForms";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="container">
        <div className="warper">
          <div className="tittle">Todo</div>

          <TodoForms />

          <Filter />

          <div className="todosWarper">
            <Todos />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
