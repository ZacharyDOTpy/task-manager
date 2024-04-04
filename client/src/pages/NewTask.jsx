import Auth from '../utils/auth';
import { useState } from 'react';

function NewTask() {
    if (!Auth.loggedIn()) {
      window.location.assign('/login');
    }
    const[taskData, setTaskData] = useState({
        title: '',
        description: '',
        status: '',
        priority: '',
        dueDate: '',
        userId: Auth.getProfile().data._id
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setTaskData({
            ...taskData,
            [name]: value
        });
    };
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(taskData);
        alert('Task created!');
    }
    return (
      <div>
        <form onSubmit ={handleFormSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                type="text"
                name="title"
                onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input
                type="text"
                name="description"
                onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="status">Status:</label>
                <input
                type="text"
                name="status"
                onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="priority">Priority:</label>
                <input
                type="text"
                name="priority"
                onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="dueDate">Due Date:</label>
                <input
                type="text"
                name="dueDate"
                onChange={handleInputChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  
  export default NewTask;