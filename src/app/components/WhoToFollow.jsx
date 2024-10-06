import { limitItems } from "@/app/lib";
import UserSummary from "@/app/components/UserSummary";
import Section from "@/app/components/Section";
import ErrorMessage from "@/app/components/ErrorMessage";

const sortUsersByPostCount = (users) => {
  return users.sort((a, b) => b.posts.total - a.posts.total);
};

const WhoToFollow = ({ users }) => {
  if (!users?.length) {
    return (
      <Section title="Who to follow">
        <ErrorMessage errorTitle="Error loading users" />
      </Section>
    );
  }

  const sortedUsers = sortUsersByPostCount(users);
  const limitedUsers = limitItems(sortedUsers, 4);

  return (
    <Section title="Who to follow">
      <div className="grid sm:grid-cols-auto-fill-100 gap-4">
        {limitedUsers?.map((user) => (
          <UserSummary key={user.id} user={user} />
        ))}
      </div>
    </Section>
  );
};

export default WhoToFollow;
