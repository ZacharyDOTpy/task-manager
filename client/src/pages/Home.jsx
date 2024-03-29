import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";

import UserList from "../components/UserList";

function Home() {
  const { data, loading, error } = useQuery(QUERY_USERS);

  const users = data?.users || [];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error) {
    return <ErrorMessage message="An error occurred. Please try again later." />;
  }

  if (loading) {
    return <LoadingSpinner />;
  }
  

  return (
    <>
      <div>Home</div>
      <UserList users={users} />
    </>
  );
}

export default Home;