import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const styles = {
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
      <>
        <Link to="/">
          Home
        </Link>
        <Link to="/me">
          {Auth.getProfile().data.username}&lsquo;s profile
        </Link>
        <button onClick={logout}>
          Logout
        </button>
      </>
    );
  }
  // If logged out show login controls
  return (
    <div style={styles.navbar}>
      <Link to="/" style={{ color: '#FFF', textDecoration: 'none' }} >
        Home
      </Link>
      <Link to="/login" style={{ color: '#FFF', textDecoration: 'none' }} >
        Login
      </Link>
      <Link to="/signup" style={{ color: '#FFF', textDecoration: 'none' }} >
        Signup
      </Link>
    </div>
  );
}

export default Navbar;