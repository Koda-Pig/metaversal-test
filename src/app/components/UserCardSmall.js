import Image from "next/image";
import Link from "next/link";

// need to fetch user post count as well
const sortUsersByPostCount = (users) => {
  return users.sort((a, b) => b.reactions.likes - a.reactions.likes);
};

const UserCardSmall = ({ user }) => {
  // these links need to go to the user profile page

  return (
    <div className="border border-content-border rounded-2xl mb-4">
      <div className="p-4 flex gap-3">
        <Link href="/" className="min-w-[40px]">
          <Image
            src="/images/avatar.png"
            alt="placeholder avatar"
            width={40}
            height={40}
          />
        </Link>
        <div>
          <Link href="/" className="mb-1">
            <h4>
              {user.firstName} {user.lastName}
            </h4>
          </Link>
          <p className="text-secondary text-xs mb-1">@{user.username}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCardSmall;
