import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/Button";
import Card from "@/app/components/Card";

const UserSummary = ({ user }) => {
  return (
    <Card>
      <div className="p-4 flex gap-3 items-center">
        <Link href={`/profile/${user.id}`} className="min-w-[40px]">
          <Image
            src="/images/avatar.png"
            alt="placeholder avatar"
            width={40}
            height={40}
          />
        </Link>
        <Link href={`/profile/${user.id}`}>
          <h4 className="mb-1 leading-4">
            {user.firstName} {user.lastName}
          </h4>
          <p className="text-secondary text-xs mb-1 ">@{user.username}</p>
        </Link>
        <Button label="Follow" classes="ml-auto" type="secondary" />
      </div>
    </Card>
  );
};

export default UserSummary;
