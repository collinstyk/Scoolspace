import { cva, VariantProps } from "class-variance-authority";
import React from "react";

function Button({ className, children, variant, size, to }) {
  return (
    <button className={buttonStyles({ className, variant, size })}>
      {children}
    </button>
  );
}

const buttonStyles = cva(
  "rounded-xl", // no base class
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
        medium: "px-8 py-[9px]",
        normal: "px-6 py-[10px] text-[14px] font-semibold",
        spread: "px-8 py-[14px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  },
);

export default Button;
