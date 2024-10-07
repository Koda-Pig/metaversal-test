import Card from "@/app/components/Card";
import SkeletonCell from "@/app/components/SkeletonCell";

const SkeletonUserFull = ({ repeats = 1 }) => {
  return (
    <>
      {Array.from({ length: repeats }).map((_, index) => (
        <Card classNames="mt-8 lg:mt-0" key={index}>
          <div className="rounded-2xl-inherit rounded-b-none bg-grey-cold-50 h-16 grid place-items-center relative">
            <div className="rounded-full border-[5px] border-white shadow absolute lg:top-11 lg:left-7">
              <SkeletonCell height="h-[120px]" width="w-[120px]" margin="" />
            </div>
          </div>

          <div className="px-4 pb-6 text-center mt-12 lg:mt-6 lg:text-left lg:grid lg:pl-48">
            <SkeletonCell
              height="h-[30px]"
              width="max-w-56"
              margin="mb-2 mx-auto lg:mx-0"
            />

            <div className="lg:flex lg:align-center lg:gap-3 lg:mb-4 max-">
              <SkeletonCell
                height="h-[19px]"
                width="max-w-[105px] lg:min-w-40 lg:max-w-40"
                margin="mb-2 mx-auto lg:m-0 lg:mb-3 lg:mx-0"
              />
              <SkeletonCell
                height="h-[19px]"
                width="max-w-[159px]"
                margin="mb-2 mx-auto"
                classes="lg:hidden"
              />
            </div>

            <SkeletonCell
              height="h-7"
              width="max-w-32"
              margin="mx-auto lg:mx-0 mb-6"
            />

            <div className="flex justify-center lg:justify-start gap-4">
              <div>
                <SkeletonCell height="h-6" width="w-20" margin="mb-1.5" />
                <SkeletonCell
                  height="h-3.5"
                  width="w-11"
                  margin="mx-auto lg:mx-0"
                />
              </div>
              <div>
                <SkeletonCell height="h-6" width="w-20" margin="mb-1.5" />
                <SkeletonCell
                  height="h-3.5"
                  width="w-11"
                  margin="mx-auto lg:mx-0"
                />
              </div>
            </div>
          </div>

          <div className="p-4 flex gap-6 border-t border-grey-cold-50  justify-center rounded-2xl-inherit rounded-t-none lg:justify-start lg:px-6">
            <SkeletonCell height="h-[35px]" width="w-24" margin="" />
            <SkeletonCell height="h-[35px]" width="w-24" margin="" />
          </div>
        </Card>
      ))}
    </>
  );
};

export default SkeletonUserFull;
