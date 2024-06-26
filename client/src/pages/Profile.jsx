// Node Modules
import 'bootstrap/dist/css/bootstrap.css';
import { Navigate, createRoutesFromElements, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// Utilities
import Auth from '../utils/auth';
import { QUERY_USERS, QUERY_USER, QUERY_ME } from '../utils/queries';
// Components
import UserList from '../components/UserList';

const Profile = () => {
  const { id } = useParams();

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'center',
    padding: 5,
    color: 'white',
    background: 'orange',
    fontSize: '2.4rem',
    fontWeight: '500',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
    fontSize: '1.6rem',
    fontWeight: '200',
  },
  header2: {
    display: 'flex',
    justifyContent: 'center',
    padding: 5,
    fontSize: '2.0rem',
    fontWeight: '300',
  },
  taskDiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 5,
    fontSize: '1.6rem',
    fontWeight: '200',
  },
  userListDiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 5,
    fontSize: '1.6rem',
    fontWeight: '200',
  },
  taskTitle: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 5,
    fontSize: '2.0rem',
    fontWeight: '600',
    background: 'orange',
    color: 'white',
    width: '800px',
  },
  taskDescription: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 5,
    fontSize: '1.6rem',
    fontWeight: '200',
    background: 'white',
  },

  
  }
  
  // Get current user
  const { loading, data, error } = useQuery(id ? QUERY_USER : QUERY_ME, {
    variables: { id },
  });
  
  // Get a list of all users
  const { usersLoading, data: usersData } = useQuery(QUERY_USERS);
  
  const user = data?.me || data?.user || {};
  const users = usersData?.users || [];
  
  if (error) console.log(error);
  
  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === id) {
    return <Navigate to="/me" replace />;
  }
  
  if (loading) {
    return <h4>Loading...</h4>;
  }
  
  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }
  
  const renderUserList = () => {
    if (usersLoading) return null;
    // Only renders users who's profile we're not currently viewing
    const notMeUsers = users.filter(o => o._id !== user._id);
    return <UserList users={notMeUsers} title="User List" />;
  };
  
  const renderCurrentUserInfo = () => {
    if (id) return null;
    return (
      <ul>
        <li>Username: {user.username}</li>
        <li>Email: {user.email}</li>
      </ul>
    );
  }

  return (
    <>
  
    <div>
      <div>
        <h2 style={styles.header} >
          Viewing {id ? `${user.username}'s` : 'your'} profile.
        </h2>
        <div  style={styles.info} >
        {renderCurrentUserInfo()}

        <h3>{user.username}'s tasks:</h3>
        {user.tasks && user.tasks.length ? (
          user.tasks.map((task) => (
            <div style={styles.taskDiv} key={task._id}>
              <h4 style={styles.taskTitle}>{task.title}</h4>
              <p style={styles.taskDescription}>{task.description}</p>
            </div>
          ))
        ) : null}

        </div>
        <div style={styles.info}>

        </div>
      </div>
        <div style={styles.userListDiv}>
        {renderUserList()}
        </div>
    </div>
    </>
  );
};

export default Profile;