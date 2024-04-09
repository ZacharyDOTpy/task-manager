import 'bootstrap/dist/css/bootstrap.css';
import Auth from '../utils/auth';
import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { QUERY_TASKS } from '../utils/queries';
import { ADD_TASK } from '../utils/mutations';

const styles = {
    form: {
        display: 'flex',
        justifyContent: 'center',
        padding: '5px',
    },
}


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
    });
    const[addTask, {error, data}] = useMutation(ADD_TASK);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setTaskData({
            ...taskData,
            [name]: value
        });
    };
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await addTask({
                variables: taskData
            });

            console.log(data);
            alert('Task created!');
        }
        catch (e) {
            console.error(e);
        }
    }
    
    return (
        <>
<body style={{backgroundColor: '#123456', margin: 0, padding: 0}}>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <form onSubmit ={handleFormSubmit} style={{ backgroundColor: '#123456', padding: '20px'}}>
            <div style={styles.form}>
                <label htmlFor="title" style={{ color: 'orange'}}>Title:</label>
                <input
                type="text"
                name="title"
                onChange={handleInputChange}
                style={{ borderColor: 'orange' }}
                />
            </div>
            <div style={styles.form}>
                <label htmlFor="description" style= {{ color: 'orange'}}>Description:</label>
                <input
                type="text"
                name="description"
                onChange={handleInputChange}
                style={{ borderColor: 'orange' }}
                />
            </div>
            <div style={styles.form}>
                <label htmlFor="status" style={{ color: 'orange'}}>Status:</label>
                <input
                type="text"
                name="status"
                onChange={handleInputChange}
                style={{ borderColor: 'orange' }}
                />
            </div>
            <div style={styles.form}>
                <label htmlFor="priority" style= {{ color: 'orange'}}>Priority:</label>
                <input
                type="text"
                name="priority"
                onChange={handleInputChange}
                style={{ borderColor: 'orange' }}
                />
            </div>
            <div style={styles.form}>
                <label htmlFor="dueDate" style= {{ color: 'orange'}}>Due Date:</label>
                <input
                type="text"
                name="dueDate"
                onChange={handleInputChange}
                style={{ borderColor: 'orange' }}
                />
            </div>
            <div style={styles.form}>
            <button type="submit" style={{ backgroundColor: 'orange', color: 'white', border: 'none', cursor: 'pointer'}}>Submit</button>
       </div>
        </form>
      </div>
    </body>
      </>
    );
  }
  
  export default NewTask;