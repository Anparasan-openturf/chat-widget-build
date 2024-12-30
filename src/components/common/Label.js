import React, { forwardRef } from "react";
import { cn } from "../../utils/cn";

const Label = forwardRef(
  ({ check, radio, disabled, className, children, ...rest }, ref) => {
    return (
      <label
        ref={ref}
        className={cn("block text-sm text-gray-700", className, {
          "inline-flex items-center": check,
          "opacity-50 cursor-not-allowed": disabled,
        })}
        {...rest}
      >
        {children}
      </label>
    );
  }
);

export default Label;
