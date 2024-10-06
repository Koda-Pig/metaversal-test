import Image from "next/image";
import Button from "@/app/components/Button";
import Card from "@/app/components/Card";
import { fetchData } from "@/app/api/fetchdata";
import { calculateTotalLikes } from "@/app/lib";

const UserFull = async ({ userId }) => {
  const user = await fetchData({
    userId: userId,
    dataType: "users",
    delay: 2000,
  });

  if (!user) {
    console.warn(`No user found for id ${id}`);
    return <ErrorMessage errorTitle="User not found" />;
  }

  const stats = await fetchData({
    userId: userId,
    dataType: "posts",
  });

  const profile = { ...user, ...stats };

  const { firstName, lastName, username, address, company, posts } = profile;
  const { department } = company;
  const totalLikes = calculateTotalLikes(posts);

  return (
    <Card classNames="mt-8">
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
          className="rounded-full border-[4px] border-white shadow absolute lg:top-10 lg:left-6"
          src="/images/avatar-large.png"
          alt="placeholder avatar"
          width={120}
          height={120}
        />
      </div>

      <div
        className={`
          px-4
          pb-6
          text-center
          mt-12
          lg:mt-6
          lg:text-left
          lg:grid
          lg:pl-40
        `}
      >
        <h1 className="text-[30px] leading-[30px] mb-2">
          {firstName} {lastName}
        </h1>

        <div className="lg:flex lg:align-center lg:gap-3 lg:mb-3">
          <p className="leading-[19px] text-secondary mb-3 lg:m-0">
            @{username}
          </p>

          <p className="flex items-center justify-center lg:justify-start gap-1 mb-3 lg:m-0">
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
        </div>

        <p className="text-light-blue bg-light-blue-50 mx-auto lg:mx-0 mb-6 px-3 w-max font-bold grid place-items-center h-7 rounded-full">
          {department}
        </p>

        <div className="flex justify-center lg:justify-start gap-3">
          <div>
            <h2 className="text-start text-2xl">{posts.length}</h2>
            <span className="text-secondary text-xs">
              POST{posts.length !== 1 ? "S" : ""}
            </span>
          </div>
          <div>
            <h2 className=" text-start text-2xl">{totalLikes}</h2>
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
          lg:justify-start
          lg:px-6
        `}
      >
        <Button label="Follow" type="primary" />
        <Button label="Message" type="secondary" />
      </div>
    </Card>
  );
};

export default UserFull;
