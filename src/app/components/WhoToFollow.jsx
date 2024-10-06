import { fetchData } from "@/app/api/fetchdata";
import { limitItems, sortUsersByPostCount, addPostsToUsers } from "@/app/lib";
import UserSummary from "@/app/components/UserSummary";
import ErrorMessage from "@/app/components/ErrorMessage";

const WhoToFollow = async () => {
  const userData = await fetchData({
    dataType: "users",
    delay: 2000,
  });
  const users = userData?.users;
  const usersWithPosts = await addPostsToUsers(users);

  if (!usersWithPosts?.length) {
    return <ErrorMessage errorTitle="Error loading users" />;
  }

  const sortedUsers = sortUsersByPostCount(usersWithPosts);
  const limitedUsers = limitItems(sortedUsers, 4);

  return (
    <div className="grid sm:grid-cols-auto-fill-100 gap-4">
      {limitedUsers?.map((user) => (
        <UserSummary key={user.id} user={user} />
      ))}
    </div>
  );
};

export default WhoToFollow;
