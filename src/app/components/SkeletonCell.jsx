const SkeletonCell = ({
  height = "h-3.5",
  width = "max-w-36",
  margin = "my-1",
  classes = "",
}) => {
  return (
    <p
      className={`
        ${height}
        ${width}
        ${margin}
        ${classes}
        animate-custom
        rounded-full
      `}
    />
  );
};

export default SkeletonCell;
