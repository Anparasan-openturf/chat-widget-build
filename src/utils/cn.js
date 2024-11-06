import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

export function cn(...inputClasses) {
  console.log(inputClasses, "inputClasses");
  return twMerge(clsx(inputClasses));
}
