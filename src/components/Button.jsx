import { cva } from "class-variance-authority";
import { useNavigate } from "react-router-dom";

function Button({ className, children, variant, size, to }) {
  const navigate = useNavigate();
  return (
    <button
      className={buttonStyles({ className, variant, size })}
      onClick={() => navigate(to)}
    >
      {children}
    </button>
  );
}

const buttonStyles = cva(
  "rounded-lg", // no base class
  {
    variants: {
      variant: {
        primary: "bg-blue-one text-white hover:bg-blue-one-hover",
        secondary: "bg-dark-blue text-white hover:bg-dark-blue-hover",
        light: "bg-white text-pitch-black",
        "outlined-dark": "border-[1px] text-pitch-black border-pitch-black",
        "outlined-light": "border-[1px] text-white border-white",
      },
      size: {
        "full-big": "w-full py-5",
        "full-medium": "w-full py-[10px]",
        large: "px-8 py-[10px]",
        normal: "px-6 py-3 font-semibold",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  },
);

export default Button;
