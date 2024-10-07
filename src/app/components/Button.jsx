"use client";

const Button = ({ action = null, label, classes = "", type = "primary" }) => {
  const classNames = [classes];

  if (type === "primary") {
    classNames.push("font-bold text-white button-primary");
  }
  if (type === "secondary") {
    classNames.push(
      "font-medium text-blue transition-color border border-blue hover:border-blue-focus hover:bg-primary-50 hover:text-blue-focus focus-visible:bg-primary-50 focus-visible:border-blue-focus focus-visible:text-blue-focus"
    );
  }

  return (
    <button
      onClick={() => {
        if (action === null) return;
        if (action === "reload") window.location.reload();
      }}
      className={`
        ${classNames.join(" ")}
        px-3.5 py-2 h-min min-h-[35px] transition-colors grid place-items-center rounded-full leading-4`}
      type="button"
    >
      <span>{label}</span>
    </button>
  );
};

export default Button;
