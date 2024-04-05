import 'bootstrap/dist/css/bootstrap.css';
import Auth from '../utils/auth';
import { useState } from 'react';

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