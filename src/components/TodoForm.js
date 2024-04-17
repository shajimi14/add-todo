import React, { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editedTask, setEditedTask] = useState("");
  const [editedDescription, setEditedDescription] = useState("");

  const addTodo = () => {
    if (task.trim() !== "") {
      setTodos([...todos, { task, description, completed: false }]);
      setTask("");
      setDescription("");
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setEditedTask(todos[index].task);
    setEditedDescription(todos[index].description);
  };

  const saveEdit = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].task = editedTask;
    updatedTodos[index].description = editedDescription;
    setTodos(updatedTodos);
    setEditIndex(null);
  };

  const cancelEdit = () => {
    setEditIndex(null);
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: "url('https://wallpaperaccess.com/thumb/99810.jpg')",
        
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6 mt-2">
            <div className="mb-2 ">
              <h2 className="text-white text-center">Todo App</h2>
              <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="form-control"
                placeholder="Task"
              />
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control mt-2"
                placeholder="Description"
              />
              <button
                className="btn btn-primary mt-2 d-block mx-auto"
                onClick={addTodo}
              >
                Add
              </button>
            </div>
            <table className="table text-white">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Task</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {todos.map((todo, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      {editIndex === index ? (
                        <input
                          type="text"
                          value={editedTask}
                          onChange={(e) => setEditedTask(e.target.value)}
                          className="form-control"
                        />
                      ) : (
                        todo.task
                      )}
                    </td>
                    <td>
                      {editIndex === index ? (
                        <input
                          type="text"
                          value={editedDescription}
                          onChange={(e) =>
                            setEditedDescription(e.target.value)
                          }
                          className="form-control"
                        />
                      ) : (
                        todo.description
                      )}
                    </td>
                    <td>
                      {editIndex === index ? (
                        <>
                          <button
                            onClick={() => saveEdit(index)}
                            className="btn btn-success btn-sm mr-2"
                          >
                            Save
                          </button>
                          <button
                            onClick={cancelEdit}
                            className="btn btn-secondary ms-2 btn-sm "
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => startEditing(index)}
                          className="btn btn-sm btn-warning mr-2 text 
                          "
                        >
                          Edit
                        </button>
                      )}
                      
                      <button
                        onClick={() => deleteTodo(index)}
                        className="btn btn-sm  btn-danger ms-2 mr-2
                        "
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;

