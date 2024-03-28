import React, { useState } from "react";

const AddTask = () => {
  // State variables to store task details
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description, dueDate, priority);
  };

  // Create new task object with input values
  const newTask = {
    title,
    description,
    dueDate,
    priority,
  };

  // You can perform further actions here, such as sending the new task object to the server using an API call.

  return (
    <div>
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        {/* Form inputs */}
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Due Date:</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <label>Priority:</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};
