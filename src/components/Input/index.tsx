import { HTMLAttributes, forwardRef } from "react";
import classnames from "classnames";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, errorMessage, ...restProps }: InputProps, ref) => {
    const classNames = classnames(
      " flex h-12 w-full items-center justify-center rounded border bg-white p-3 text-sm outline-none border-gray-200 focus:ring-2 ",
      className
    );

    return (
      <div className="mb-2">
        <input {...restProps} ref={ref} className={classNames} />
        <div className="text-sm text-error min-h-[1rem] m-0">{errorMessage}</div>
      </div>
    );
  }
);

export default Input;
