"use client";

const Button = ({ action = null, label, classes = "", type = "primary" }) => {
  const classNames = [classes];

  if (type === "primary") {
    classNames.push("font-bold text-white button-primary");
  }
  if (type === "secondary") {
    classNames.push(
      "font-medium text-blue border border-blue hover:grey-cold-20-50 focus-visible:grey-cold-20-50"
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
        px-3.5 py-2
        h-min
        min-h-[35px] transition-colors
				grid place-items-center
        rounded-full leading-4
			`}
      type="button"
    >
      <span>{label}</span>
    </button>
  );
};

export default Button;
