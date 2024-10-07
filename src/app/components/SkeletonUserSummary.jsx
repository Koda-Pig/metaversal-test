import Card from "@/app/components/Card";
import SkeletonCell from "@/app/components/SkeletonCell";

const SkeletonUserSummary = ({ repeats = 1 }) => {
  return (
    <>
      {Array.from({ length: repeats }).map((_, index) => (
        <Card key={index}>
          <div className="p-4 flex gap-3 items-center" aria-hidden="true">
            <SkeletonCell height="h-10" width="min-w-10" margin="" />
            <div className="w-full">
              <SkeletonCell height="h-4" width="max-w-32" />
              <SkeletonCell height="h-4" width="max-w-16" margin="" />
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};

export default SkeletonUserSummary;
