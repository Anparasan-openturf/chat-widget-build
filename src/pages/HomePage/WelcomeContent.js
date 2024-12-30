import React from "react";
import { AiIcon } from "../../assets/icons";

function WelcomeContent() {
  return (
    <div className="my-20 tracking-wide leading-loose">
      <div className="flex items-center justify-center">
        <h1 className="text-6xl font-semibold flex">
          Generative <AiIcon className="-mt-14 ml-4" />
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-semibold">
          <span className="ai-gradient">AI</span> Playground
        </h1>
        <p className="text-center mt-4 text-lg max-w-lg">
          Lorem ipsum dolor sit amet consectetur. At eu magna tincidunt
          porttitor curabitur nisl.
        </p>
      </div>
    </div>
  );
}

export default WelcomeContent;
