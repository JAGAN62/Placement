import React, { useState } from 'react';
import './TodoList.css'; // Import the CSS file

function TodoList() {
  const [task, setTask] = useState({ taskname: '', description: '' });
  const [tasks, setTasks] = useState([]);
  const [editTask, setEdit] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.taskname.trim() === '' || task.description.trim() === '') {
      alert("Please fill in both task name and description.");
      return;
    }
    if (editTask === null) {
      setTasks([...tasks, task]);
    } else {
      const update = [...tasks];
      update[editTask] = task;
      setTasks(update);
      setEdit(null);
    }
    setTask({ taskname: '', description: '' });
  };

  const handleEdit = (index) => {
    setTask(tasks[index]);
    setEdit(index);
  };

  const handleDelete = (index) => {
    const updateTsk = tasks.filter((_, i) => i !== index);
    setTasks(updateTsk);
  };

  return (
    <>
<div className="container">
  <h2>{editTask === null ? 'Add Task' : 'Edit Task'}</h2>

  <form onSubmit={handleSubmit}>
    <input
      name="taskname"
      placeholder="Enter Task"
      value={task.taskname}
      onChange={handleChange}
    />
    <textarea
      name="description"
      placeholder="Description..."
      value={task.description}
      onChange={handleChange}
    ></textarea>
    <button type="submit">
      {editTask === null ? 'Add Task' : 'Update Task'}
    </button>
  </form>

  {/* ✅ Tasks INSIDE container */}
  <div className="card-wrapper">
    {tasks.map((tsk, index) => (
      <div className="task-card" key={index}>
        <h2>To-Do-List</h2>
        <p><strong>Task:</strong> {tsk.taskname}</p>
        <p><strong>Description:</strong> {tsk.description}</p>
        <div>
          <button onClick={() => handleEdit(index)}>Edit</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      </div>
    ))}
  </div>
</div>

      {/* Card section outside container */}
      {/* <div className="card-wrapper">
        {tasks.length > 0 &&
          tasks.map((tsk, index) => (
            <div className="task-card" key={index}>
              <h2>To-Do-List</h2>
              <p><strong>Task:</strong> {tsk.taskname}</p>
              <p><strong>Description:</strong> {tsk.description}</p>
              <div>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          ))}
      </div> */}
    </>
  );
}

export default TodoList;
