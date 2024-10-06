"use client";

const Button = ({ action = null, label, classes = "", type = "primary" }) => {
  const classNames = [classes];

  // primary button should have this gradient:
  // background: linear-gradient(180deg, #FF0073 -114.9%, #811AB8 -51.51%, #4426D9 100%);

  // that should transition to this on hover/ focus:
  // background: linear-gradient(180deg, #FF0073 -85.89%, #811AB8 34.45%, #4426D9 100%);

  // having trouble getting this gradient to work correctly with tailwind.
  // also need to find a workaround to transitioning the gradient because
  // css transitions don't work with background-image.
  // Maybe transitioning background position could work?
  // This might work too:
  // https://developer.mozilla.org/en-US/docs/Web/CSS/@property
  // or this:
  // https://www.reddit.com/r/tailwindcss/comments/17uy96o/background_gradient_transitions_using_tailwind/

  // bg-gradient-to-b
  // from-pink
  // from-[-114.9%]
  // via-blue
  // via-[-51.51%]
  // to-purple
  // to-100%
  if (type === "primary") {
    classNames.push(
      `
			font-bold
			text-white
      button-primary
			`
    );
  }
  if (type === "secondary") {
    classNames.push(
      `
			font-medium
			text-blue
			border
			border-blue
			hover:bg-primary-50
			focus-visible:bg-primary-50
			`
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
