import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Card from "./Card";

const UserSummary = ({ user }) => {
  // these links need to go to the user profile page which has not been built yet
  console.log("user id:", user.id);

  return (
    <Card>
      <div className="p-4 flex gap-3 items-center">
        <Link href={`/users/${user.username}`} className="min-w-[40px]">
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
          <p className="text-secondary text-xs mb-1 ">@{user.username}</p>
        </div>
        <Button label="Follow" classes="ml-auto" type="primary" />
      </div>
    </Card>
  );
};

export default UserSummary;
