import 'bootstrap/dist/css/bootstrap.css';
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
        <>

      <div>
        <form onSubmit ={handleFormSubmit} style={{ backgroundColor: '#123456', padding: '20px', borderRadius: '8px'}}>
            <div>
                <label htmlFor="title" style={{ color: 'orange'}}>Title:</label>
                <input
                type="text"
                name="title"
                onChange={handleInputChange}
                style={{ borderColor: 'orange', borderRadius: '4px' }}
                />
            </div>
            <div>
                <label htmlFor="description" style= {{ color: 'orange'}}>Description:</label>
                <input
                type="text"
                name="description"
                onChange={handleInputChange}
                style={{ borderColor: 'orange', borderRadius: '4px' }}
                />
            </div>
            <div>
                <label htmlFor="status" style={{ color: 'orange'}}>Status:</label>
                <input
                type="text"
                name="status"
                onChange={handleInputChange}
                style={{ borderColor: 'orange', borderRadius: '4px' }}
                />
            </div>
            <div>
                <label htmlFor="priority" style= {{ color: 'orange'}}>Priority:</label>
                <input
                type="text"
                name="priority"
                onChange={handleInputChange}
                style={{ borderColor: 'orange', borderRadius: '4px' }}
                />
            </div>
            <div>
                <label htmlFor="dueDate" style= {{ color: 'orange'}}>Due Date:</label>
                <input
                type="text"
                name="dueDate"
                onChange={handleInputChange}
                style={{ borderColor: 'orange', borderRadius: '4px' }}
                />
            </div>
            <button type="submit" style={{ backgroundColor: 'orange', color: 'white',  borderRadius: '4px', padding: '8px 16px', border: 'none', cursor: 'pointer'}}>Submit</button>
        </form>
      </div>
      </>
    );
  }
  
  export default NewTask;