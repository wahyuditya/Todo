import { useState } from "react";

function Todos({
  title,
  handleRemove,
  index,
  saveUpdate,
  markComplete,
  complete,
}) {
  const [update, setUpdate] = useState(title);
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    setUpdate(e.target.value);
    // const val = e.target.value;
    // // setUpdate(val);
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
            value={title}
          ></input>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEdit(false)}>Cancel</button>
        </>
      ) : (
        <>
          <p>{title}</p>
          {complete ? (
            <>
              <button onClick={() => handleRemove(index)}>Remove</button>
            </>
          ) : (
            <>
              <button onClick={() => setIsEdit(true)}>Edit</button>
              <button onClick={() => handleRemove(index)}>Remove</button>
              <button onClick={() => markComplete(index)}>
                Mark as complete
              </button>
            </>
          )}
        </>
      )}
    </>
  );
}

export default Todos;
