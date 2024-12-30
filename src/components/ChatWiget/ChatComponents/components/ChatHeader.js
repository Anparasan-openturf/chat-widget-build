import React, { useContext } from "react";
import { Expand, Forward, Shrink, Ticket, Time } from "../Icons";
import { GlobalStateContext } from "../../ContextState";

const ChatHeader = () => {
  const { isExpanded, setIsExpanded } = useContext(GlobalStateContext);
  return (
    <div className="shadow-custom py-[16px] px-[24px]">
      <div className="flex items-center justify-end gap-[32px]">
        <div className="cursor-pointer">
          <Ticket />
        </div>
        {/* <div className="cursor-pointer">
          <Time />
        </div>
        <div className="cursor-pointer">
          <Forward />
        </div> */}
        <div
          className="cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? <Shrink /> : <Expand />}
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
