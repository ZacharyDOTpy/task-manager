import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";

import UserList from "../components/UserList";

function Home() {
  const { data, loading, error } = useQuery(QUERY_USERS);

  const users = data?.users || [];

  if (error) {
    return <ErrorMessage message="An error occurred. Please try again later." />;
  }

  if (loading) {
    return <h2>Loading…</h2>;
  }
  

  return (
    <>
      <div>Home</div>
      <UserList users={users} />
    </>
  );
}

export default Home;