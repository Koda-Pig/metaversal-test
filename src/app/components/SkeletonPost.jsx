import Card from "@/app/components/Card";
import SkeletonCell from "@/app/components/SkeletonCell";

const SkeletonPost = ({ repeats = 1 }) => {
  return (
    <>
      {Array.from({ length: repeats }).map((_, index) => (
        <Card key={index}>
          <div className="p-4 flex gap-3" aria-hidden="true">
            <SkeletonCell height="h-10" width="min-w-10" margin="" />
            <div className="w-full">
              <div>
                <SkeletonCell height="h-4" width="max-w-36" />
                <SkeletonCell height="h-3.5" width="max-w-20" />
              </div>

              <SkeletonCell
                height="h-3.5"
                width="max-w-56"
                margin="mt-4 mb-1.5"
              />
              <SkeletonCell height="h-3.5" width="max-w-44" margin="mb-3" />

              <div className="flex gap-3">
                <SkeletonCell height="h-[14px]" width="min-w-10" margin="" />
                <SkeletonCell height="h-[14px]" width="min-w-10" margin="" />
                <SkeletonCell height="h-[14px]" width="min-w-10" margin="" />
              </div>
            </div>
          </div>

          <div className="p-4 flex gap-6 border-t border-content-border">
            <SkeletonCell height="h-[19px]" width="min-w-10" margin="" />
            <SkeletonCell height="h-[19px]" width="min-w-10" margin="" />
            <SkeletonCell height="h-[19px]" width="min-w-10" margin="" />
          </div>
        </Card>
      ))}
    </>
  );
};

export default SkeletonPost;
