import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

export function cn(...inputClasses) {
  return twMerge(clsx(inputClasses));
}
