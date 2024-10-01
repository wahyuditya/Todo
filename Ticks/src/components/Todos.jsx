import { useState } from "react";

function Todos({ tittle, handleRemove, index, saveUpdate }) {
  const [update, setUpdate] = useState(tittle);
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    setUpdate(e.target.value);
  };

  const handleSave = () => {
    saveUpdate(index, update);
    setIsEdit(false);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  return (
    <>
      {isEdit ? (
        <>
          <input
            type="text"
            onKeyDown={handleEnter}
            onChange={handleChange}
            value={update}
          ></input>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEdit(false)}>Cancel</button>
        </>
      ) : (
        <>
          <p>{tittle}</p>
          <button onClick={() => handleRemove(index)}>Remove</button>
          <button onClick={() => setIsEdit(true)}>Edit</button>
          <button>Mark as complete</button>
        </>
      )}
    </>
  );
}

export default Todos;
