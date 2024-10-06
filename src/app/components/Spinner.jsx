import React from "react";

const Spinner = ({ showLoadingText = false, classNames = "" }) => {
  const id = React.useId();
  const loadingTextClasses = showLoadingText
    ? "text-secondary mt-3"
    : "sr-only";

  return (
    <div
      role="status"
      className={`${classNames} grid place-items-center`}
      id={id}
    >
      <i className="spinner animate-spin w-5 h-5 rounded-[50%]" />
      <span className={loadingTextClasses}>Loading...</span>
    </div>
  );
};

export default Spinner;
