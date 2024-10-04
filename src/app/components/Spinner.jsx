import React from "react";

const Spinner = () => {
  const id = React.useId();

  return (
    <div role="status" className="grid place-items-center" id={id}>
      <i className="spinner" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
