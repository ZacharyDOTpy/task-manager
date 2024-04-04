import Auth from '../utils/auth';

function NewTask() {
    console.log(Auth.loggedIn());
    if (!Auth.loggedIn()) {
      window.location.assign('/login');
    }
    return (
      <div>New Task here!</div>
    );
  }
  
  export default NewTask;