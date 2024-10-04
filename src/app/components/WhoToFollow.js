import { limitItems } from "../lib";
import UserCardSmall from "./UserCardSmall";

const sortUsersByPostCount = (users) => {
  return users.sort((a, b) => b.posts.total - a.posts.total);
};

const WhoToFollow = ({ users }) => {
  const sortedUsers = sortUsersByPostCount(users);
  const limitedUsers = limitItems(sortedUsers, 4);

  return (
    <section>
      <h2 className="text-black font-extrabold text-2xl mb-4">Who to follow</h2>
      <div className="grid sm:grid-cols-auto-fill-100 gap-4">
        {limitedUsers?.map((user) => (
          <UserCardSmall key={user.id} user={user} />
        ))}
      </div>
    </section>
  );
};

export default WhoToFollow;
