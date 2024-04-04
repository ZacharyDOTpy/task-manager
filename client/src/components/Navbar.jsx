import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const styles = {
  title: {
    display: 'flex',
    justifyContent: 'flex-start',
    background: 'orange',
    padding: 5,
    color: 'white',
    fontSize: '3.2rem',
    fontWeight: '700',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    background: '#123456',
    padding: 10,
    color: 'white',
    fontSize: '1.4rem',
  },
};

function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  
  if (Auth.loggedIn()) {
    return (
      <div style={styles.navbar}>
        <div style={styles.title}>TODO:</div>
       <Link to="/" style={{ color: '#FFF', textDecoration: 'none' }} >
        Home
      </Link>
        <Link to="/me" style={{ color: '#FFF', textDecoration: 'none' }}>
          {Auth.getProfile().data.username}&lsquo;s profile
        </Link >
        <Link to="/NewTask" style={{ color: '#FFF', textDecoration: 'none' }} >
        New Task
      </Link>
       <div style={styles.navbar}></div>
        <button style={{ color: '#FFF', textDecoration: 'none', background: 'orange' }} onClick={logout}>
          Logout
        </button>
      </div>
    );
  }
  // If logged out show login controls

  return (
    <div style={styles.navbar}>
      <div style={styles.title}>TODO:</div>
      <Link to="/" style={{ color: '#FFF', textDecoration: 'none' }} >
        Home
      </Link>
      <Link to="/login" style={{ color: '#FFF', textDecoration: 'none' }} >
        Login
      </Link>
      <Link to="/signup" style={{ color: '#FFF', textDecoration: 'none' }} >
        Signup
      </Link>
      <Link to="/NewTask" style={{ color: '#FFF', textDecoration: 'none' }} >
        New Task
      </Link>
    </div>
  );
}

export default Navbar;