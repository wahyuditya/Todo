import { useState } from "react";
import { useEffect } from "react";

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
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const blockClick = (e) => {
      if (isEdit && !e.target.closest(".edit-form")) {
        e.stopPropagation();
        e.preventDefault();
        setShowTooltip(true);
      }
    };
    if (isEdit) {
      document.addEventListener("click", blockClick, true);
    } else {
      document.removeEventListener("click", blockClick, true);
    }

    return () => {
      document.removeEventListener("click", blockClick, true);
    };
  }, [isEdit]);

  const handleChange = (e) => {
    setUpdate(e.target.value);
  };

  const handleEdit = () => {
    setUpdate(title);
    setIsEdit(true);
    setShowTooltip(false);
  };

  const handleSave = () => {
    saveUpdate(index, update);
    setIsEdit(false);
  };

  const handleCancel = () => {
    setIsEdit(false);
    setShowTooltip(false);
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
          <div className="edit-form">
            <input
              type="text"
              onKeyDown={handleEnter}
              onChange={handleChange}
              value={update}
            ></input>
            <div className="buttons-editMode">
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
            {showTooltip && (
              <div className="tooltip">
                Please save or cancel your changes before continuing
              </div>
            )}
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
