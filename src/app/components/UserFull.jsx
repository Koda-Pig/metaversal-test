import Image from "next/image";
import Button from "./Button";
import Card from "./Card";

const UserFull = ({ user }) => {
  const { firstName, lastName, username, address, company } = user;
  const { department } = company;

  return (
    <Card>
      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 h-16 grid place-items-center relative">
        <Image
          className="rounded-full border-[4px] border-white shadow absolute"
          src="/images/avatar-large.png"
          alt="placeholder avatar"
          width={120}
          height={120}
        />
      </div>
      <div className="px-4 pb-6 text-center mt-12">
        <h1 className="text-[30px] mb-2">
          {firstName} {lastName}
        </h1>

        <p className="text-secondary mb-3">@{username}</p>

        <p className="flex items-center justify-center gap-1 mb-3">
          <Image
            className=""
            src="/icons/map-pin.svg"
            alt="placeholder avatar"
            width={12}
            height={15}
          />
          <span className="text-secondary">
            {address.city}, {address.state}
          </span>
        </p>

        <p className="text-light-blue bg-light-blue-50 mx-auto mb-6 px-3 w-max font-bold grid place-items-center h-7 rounded-full">
          {department}
        </p>

        <div className="flex justify-center gap-3">
          <div>
            <h2>TOTAL POSTS</h2>
            <span className="text-secondary text-xs">POSTS</span>
          </div>
          <div>
            <h2>TOTAL LIKES</h2>
            <span className="text-secondary text-xs">LIKES</span>
          </div>
        </div>
      </div>

      <div className="p-4 flex gap-6 border-t border-content-border justify-center">
        <Button label="Follow" type="primary" />
        <Button label="Message" type="secondary" />
      </div>
      {/* <Button label="Follow" classes="ml-auto" type="primary" /> */}
    </Card>
  );
};

export default UserFull;
