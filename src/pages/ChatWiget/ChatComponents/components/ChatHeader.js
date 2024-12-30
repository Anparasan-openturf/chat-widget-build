import React, { useContext } from "react";
import { Expand, Forward, Shrink, Ticket, Time } from "../Icons";
import { SeparateStateContext } from "../../ContextState";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../../../../components/ChatWiget/ContextState";

const ChatHeader = () => {
  // const { isExpanded, setIsExpanded } = useContext(SeparateStateContext);
  const { isExpanded, setIsExpanded } = useContext(GlobalStateContext);
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between shadow-custom py-[16px] px-[24px]">
      <div className="cursor-pointer" onClick={() => navigate("/")}>
        <ArrowBackIosNewOutlinedIcon sx={{ color: "#758195" }} />
      </div>
      <div className="flex items-center justify-end gap-[32px]">
        <div className="cursor-pointer">
          <Ticket />
        </div>
        <div className="cursor-pointer">
          <Time />
        </div>
        <div className="cursor-pointer">
          <Forward />
        </div>
        {/* <div
          className="cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? <Shrink /> : <Expand />}
        </div> */}
      </div>
    </div>
  );
};

export default ChatHeader;
