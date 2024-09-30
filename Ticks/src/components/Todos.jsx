function Todos({ tittle, handleRemove }) {
  return (
    <>
      <p>{tittle}</p>
      <button onClick={handleRemove}>Remove</button>
      <button>Edit</button>
      <button>Mark as complete</button>
    </>
  );
}

export default Todos;
