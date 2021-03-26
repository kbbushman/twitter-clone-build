import { useParams } from "react-router";
import { useQuery } from "react-query";
import Heading from "components/Heading";
import UserList from "components/UsersList";
import { getUserFollowers } from "../utils/api-client";

export default function UserFollowers() {
  const { username } = useParams();
  const { data: users, isLoading, isSuccess } = useQuery("UserFollowers", () =>
    getUserFollowers(username)
  );

  return (
    <>
      <Heading title="Followers" backButton btnProfile />
      <UserList
        users={users}
        isLoading={isLoading}
        isSuccess={isSuccess}
        noPop
      />
    </>
  );
}
