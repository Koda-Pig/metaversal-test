const Button = ({ label, classes = "", type = "primary" }) => {
  const classNames = [classes];
  const spanClassnames = [];

  if (type === "primary") {
    classNames.push(
      "font-bold text-white relative overflow-hidden before:content-[''] after:content-[''] before:absolute after:absolute before:inset-0 after:inset-0 before:pointer-events-none after:pointer-events-none before:bg-gradient-to-b after:bg-gradient-to-b before:from-pink after:from-pink before:via-purple after:via-purple before:to-blue after:to-blue before:from-[-85.89%] before:via-[34.45%] before:to-[100%] after:from-[-114.9%] after:via-[-51.51%] after:to-[100%] after:transition-opacity hover:after:opacity-0 focus-visible:after:opacity-0"
    );
    spanClassnames.push("relative z-[1]");
  }
  if (type === "secondary") {
    classNames.push(
      "font-medium text-blue transition-color border border-blue hover:border-blue-focus hover:bg-primary-50 hover:text-blue-focus focus-visible:bg-primary-50 focus-visible:border-blue-focus focus-visible:text-blue-focus"
    );
  }

  return (
    <button
      className={`
        ${classNames.join(" ")}
        px-3.5 py-2 h-min min-h-[35px] transition-colors grid place-items-center rounded-full leading-4`}
      type="button"
    >
      <span className={spanClassnames.join(" ")}>{label}</span>
    </button>
  );
};

export default Button;
