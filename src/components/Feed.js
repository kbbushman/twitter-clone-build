import { useQuery } from "react-query";
import PostsList from "components/PostsList";
import FollowCard from "./FollowCard";
import { getPosts } from "../utils/api-client";

export default function Feed() {
  const { data: posts, isLoading, isSuccess } = useQuery("Posts", getPosts);

  return (
    <>
      <PostsList posts={posts} isLoading={isLoading} isSuccess={isSuccess} />
      <div className="message text-info">You have reached the end!</div>
      <FollowCard
        noPop
        length={7}
        title="Follow more users to see their posts"
      />
    </>
  );
}
