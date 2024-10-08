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

  const handleChange = (e) => {
    setUpdate(e.target.value);
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
          <div className="buttons-editMode">
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEdit(false)}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <p className={complete ? "completed" : ""}>{title}</p>
          {complete ? (
            <>
              <div className="buttons">
                <button className="remove-btn" onClick={() => handleRemove(id)}>
                  Remove
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="buttons">
                <button className="remove-btn" onClick={() => handleRemove(id)}>
                  Remove
                </button>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={() => markComplete(index)}>
                  Mark as complete
                </button>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default Todos;
