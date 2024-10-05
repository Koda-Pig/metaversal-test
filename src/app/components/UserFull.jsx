"use client";
import Image from "next/image";
import Button from "@/app/components/Button";
import Card from "@/app/components/Card";

const calculateTotalLikes = (posts) => {
  return posts.reduce((acc, post) => {
    return acc + post.reactions.likes;
  }, 0);
};

const UserFull = ({ user }) => {
  const { firstName, lastName, username, address, company, posts } = user;
  const { department } = company;

  const totalLikes = calculateTotalLikes(posts);

  return (
    <Card>
      <div
        className={`
          rounded-2xl-inherit
          rounded-b-none
          bg-gradient-to-r
          from-primary-50
          to-secondary-50
          h-16
          grid
          place-items-center
          relative
        `}
      >
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
            <h2>{posts.length}</h2>
            <span className="text-secondary text-xs">
              POST{posts.length !== 1 ? "S" : ""}
            </span>
          </div>
          <div>
            <h2>{totalLikes}</h2>
            <span className="text-secondary text-xs">LIKES</span>
          </div>
        </div>
      </div>

      <div
        className={`
          p-4
          flex
          gap-6
          border-t
        border-grey-cold-50 
          justify-center
          bg-gradient-to-b
          from-white
          to-off-white
          to-100%
          rounded-2xl-inherit
          rounded-t-none
        `}
      >
        <Button label="Follow" type="primary" />
        <Button label="Message" type="secondary" />
      </div>
    </Card>
  );
};

export default UserFull;
