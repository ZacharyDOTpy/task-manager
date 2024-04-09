import React, { useState } from 'react';
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
    modalBackdrop: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
    },
    modalContent: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '5px',
    },
};

function NewTask() {
    const [showModal, setShowModal] = useState(false);
    const [taskData, setTaskData] = useState({
        title: '',
        description: '',
        status: '',
        priority: '',
        dueDate: '',

    });
    const[addTask, {error, data}] = useMutation(ADD_TASK);

        userId: Auth.getProfile().data._id,
    });


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setTaskData({
            ...taskData,
            [name]: value,
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
    

        console.log(taskData);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };


    return (
        <>
            <body style={{ backgroundColor: '#123456', margin: 0, padding: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <form onSubmit={handleFormSubmit} style={{ backgroundColor: '#123456', padding: '20px' }}>
                        <div style={styles.form}>
                            <label htmlFor="title" style={{ color: 'orange' }}>Title:</label>
                            <input
                                type="text"
                                name="title"
                                onChange={handleInputChange}
                                style={{ borderColor: 'orange' }}
                            />
                        </div>
                        <div style={styles.form}>
                            <label htmlFor="description" style={{ color: 'orange' }}>Description:</label>
                            <input
                                type="text"
                                name="description"
                                onChange={handleInputChange}
                                style={{ borderColor: 'orange' }}
                            />
                        </div>
                        <div style={styles.form}>
                            <label htmlFor="status" style={{ color: 'orange' }}>Status:</label>
                            <select
                                name="status"
                                value={taskData.status}
                                onChange={handleInputChange}
                                style={{ borderColor: 'orange' }}
                            >
                                <option value="To Do">To Do</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                        <div style={styles.form}>
                            <label htmlFor="priority" style={{ color: 'orange' }}>Priority:</label>
                            <input
                                type="text"
                                name="priority"
                                onChange={handleInputChange}
                                style={{ borderColor: 'orange' }}
                            />
                        </div>
                        <div style={styles.form}>
                            <label htmlFor="dueDate" style={{ color: 'orange' }}>Due Date:</label>
                            <input
                                type="text"
                                name="dueDate"
                                onChange={handleInputChange}
                                style={{ borderColor: 'orange' }}
                            />
                        </div>
                        <div style={styles.form}>
                            <button type="submit" style={{ backgroundColor: 'orange', color: 'white', border: 'none', cursor: 'pointer' }}>Submit</button>
                        </div>
                    </form>
                </div>
            </body>

            {/* Modal */}
            {showModal && (
                <div style={styles.modalBackdrop}>
                    <div style={styles.modalContent}>
                        <h2>Task Created</h2>
                        <p>Task created successfully!</p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default NewTask;
