import React from "react";
import { cn } from "../utils/cn";
import "../assets/styles/containers.css";

function MiddleContainer({ bgColor, className, children, isWelcome = false }) {
  return (
    <div
      className={cn("w-full py-12 main-container", bgColor, className, {
        "welcome-bg": isWelcome,
      })}
    >
      <div className="middle-container h-full">{children}</div>
    </div>
  );
}

export default MiddleContainer;
