import React from "react";
import "../assets/styles/containers.css";

function MainContainer({ children }) {
  return (
    <div className="w-full h-screen pt-24 main-container background-gradient">
      <div className="middle-container h-full">{children}</div>
    </div>
  );
}

export default MainContainer;
