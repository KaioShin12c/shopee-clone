import classnames from "classnames";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
}

const Button = ({ children, className, ...restProps }: ButtonProps) => {
  const classNames = classnames(
    "rounded-full bg-primary-500 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-primary-600 active:bg-primary-700",
    className
  );

  return (
    <button {...restProps} className={classNames}>
      {children}
    </button>
  );
};

export default Button;
