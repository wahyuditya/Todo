import { useState } from "react";

function Todos({
  title,
  handleRemove,
  index,
  saveUpdate,
  markComplete,
  complete,
  id,
}) {
  const [update, setUpdate] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  // setUpdate(title)

  const handleChange = (e) => {
    setUpdate(e.target.value);
    // const val = e.target.value;
    // // setUpdate(val);
  };

  const handleEdit = () => {
    setUpdate(title);
    setIsEdit(true);
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
          <p className={complete ? "completed" : ""}>{title}</p>
          {complete ? (
            <>
              <button className="remove-btn" onClick={() => handleRemove(id)}>
                Remove
              </button>
            </>
          ) : (
            <>
              <button className="remove-btn" onClick={() => handleRemove(id)}>
                Remove
              </button>
              <button onClick={handleEdit}>Edit</button>
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
