import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { Form, Link } from 'react-router-dom';


import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const styles = {
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5px',
    color: 'blue',
    textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)', // Add a slight text shadow for depth
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)', // Add box shadow for depth
    borderRadius: '10px', // Add border radius for rounded corners
    background: 'linear-gradient(145deg, #ffffff, #e6e6e6)', // Add gradient for background
    padding: '20px', // Add padding for spacing
  },
  input: {
    marginBottom: '15px',
    border: '1px solid #ced4da', // Add border to input fields
    borderRadius: '5px', // Add border radius
    padding: '10px', // Add padding
    width: '100%', // Make input width full
  },
};


const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState)

    try {
      const { data } = await addUser({
        variables: { input: { ...formState } },
      });
      console.log('data', data)
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }

  };

  const renderForm = () => {
    if (data) {
      return (
        <p>
          Success! You may now head{' '}
          <Link to="/">back to the homepage.</Link>
        </p>
      )
    }
    return (

      <form onSubmit={handleFormSubmit} style={styles.form}>
        <div className="form-group">
          <label htmlFor="inputUsername">Username</label>
          <input
            type="text"
            className="form-control"
            id="inputUsername"
            aria-describedby="usernameHelp"
            placeholder="Enter username"
            name="username"
            value={formState.username}
            onChange={handleChange} style={{ border: '1px solid #ced4da', borderRadius: '5px', padding: '10px', width: '100%' }}
          />
          <small id="usernameHelp" className="form-text text-muted">some words here.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            value={formState.email}
            onChange={handleChange} style={{ border: '1px solid #ced4da', borderRadius: '5px', padding: '10px', width: '100%' }}
          />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            value={formState.password}
            onChange={handleChange}
            style={{ border: '1px solid #ced4da', borderRadius: '5px', padding: '10px', width: '100%' }}
          />
        </div>
        <br />
        {/* <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div> */}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  };

  return (
    <main>
      <h4 style={styles.title}>Sign Up Here</h4>
      <div style={styles.form}>
        {renderForm()}
        {error && <div>{error.message}</div>}
      </div>
    </main>
  );
};

export default Signup;