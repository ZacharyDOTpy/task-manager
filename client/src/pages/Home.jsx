import 'bootstrap/dist/css/bootstrap.css';
import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";

import UserList from "../components/UserList";



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

      <UserList users={users} />
    </>
  );
}

export default Home;  