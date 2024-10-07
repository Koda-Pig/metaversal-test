import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/Button";
import Card from "@/app/components/Card";

const UserSummary = ({ user }) => {
  const url = `/profile/${user.id}`;

  return (
    <Card>
      <div className="p-4 flex gap-3 items-center">
        <Link href={url} className="min-w-[40px]">
          <Image
            className="transition-opacity hover:opacity-50 focus-visible:opacity-50"
            src="/images/avatar.png"
            alt="placeholder avatar"
            width={40}
            height={40}
          />
        </Link>
        <Link href={url} className="overflow-hidden">
          <h4 className="mb-[3px] leading-4 border-b-[1px] transition-colors border-transparent hover:border-primary focus-visible:border-primary sm:truncate">
            {user.firstName} {user.lastName}
          </h4>
          <p className="text-secondary text-xs">@{user.username}</p>
        </Link>
        <Button label="Follow" classes="ml-auto" type="secondary" />
      </div>
    </Card>
  );
};

export default UserSummary;
