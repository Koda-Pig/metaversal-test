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

  if (type === "primary") {
    classNames.push(
      `
			font-bold
			text-white
			bg-gradient-to-b
			from-pink
			from-[-114.9%]
			via-blue
			via-[-51.51%]
			to-purple
			to-100%
			hover:from-[-85.89%]
			hover:via-34.45%
			hover:to-100%
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

        if (action === "reload") {
          window.location.reload();
        }
      }}
      className={`
				${classNames.join(" ")}
				grid
				place-items-center
				rounded-full
				leading-4
				min-h-[35px]
				transition-colors
				py-2
				px-3.5
				h-min
			`}
      type="button"
    >
      {label}
    </button>
  );
};

export default Button;
