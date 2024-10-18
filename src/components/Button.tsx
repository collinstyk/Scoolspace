import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  to: String;
}

function Button({ children, variant, size, to }: ButtonProps) {
  return (
    <button className={buttonStyles({ variant, size })}>{children}</button>
  );
}

const buttonStyles = cva(
  "rounded-xl", // no base class
  {
    variants: {
      variant: {
        primary: "bg-blue-one text-white hover:bg-blue-one-hover",
        secondary: "bg-dark-blue text-white hover:bg-dark-blue-hover",
        "outlined-dark": "border-[1px] text-pitch-black border-pitch-black",
        "outlined-light": "border-[1px] text-white border-white",
      },
      size: {
        medium: "px-8 py-[9px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  },
);

export default Button;
