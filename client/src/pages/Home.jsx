import 'bootstrap/dist/css/bootstrap.css';
import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";

import UserList from "../components/UserList";

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
};

function Home() {
  const { data, loading, error } = useQuery(QUERY_USERS);

  const users = data?.users || [];

  if (error) {
    throw Error(error);
  }

  if (loading) {
    return <h2>Loading…</h2>;
  }
  

  return (
    <>
      <div style={styles.title}>TODO:</div>
      <UserList users={users} />
    </>
  );
}

export default Home;