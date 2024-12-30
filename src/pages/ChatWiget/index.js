import React, { useContext } from "react";
import { Iicon, Xicon } from "./ChatComponents/Icons";
import ChatHeader from "./ChatComponents/components/ChatHeader";
import ChatBody from "./ChatComponents/components/ChatBody";
import SearchBar from "./ChatComponents/components/SearchBar";
import ChatFooter from "./ChatComponents/components/ChatFooter";
import { SeparateStateContext } from "./ContextState";
import { GlobalStateContext } from "../../components/ChatWiget/ContextState";

const ChatWidget = () => {
  // const { isExpanded, chatData, tab, isChatOpen, setIsChatOpen } =
  //   useContext(SeparateStateContext);
  const { isExpanded, chatData, tab, isChatOpen, setIsChatOpen } =
    useContext(GlobalStateContext);
  return (
    <div className="h-[100%] ">
      {true && (
        <div
          className={`flex flex-col overflow-y-scroll hide-scrollbar shadow-outer  bg-white ${
            isExpanded ? "" : ""
          }  lg:h-[100vh] min-[320px]:h-[80vh] rounded-[10px] overflow-x-auto no-scrollbar`}
        >
          <div className="sticky top-0 w-[100%] bg-white ">
            <ChatHeader />
          </div>
          {/* <hr className="drop-shadow-lg" /> */}
          <div
            // className="mb-[10%] flex flex-col mt-[auto] min-h-[70vh]"
            className={` ${
              chatData.length > 0 && tab === "home"
                ? "mb-[5%] flex flex-col mt-[auto]"
                : "min-h-[75vh]"
            }`}
          >
            <ChatBody />
          </div>
          {/* <div>
            {tab === "home" && (
              <div className="sticky bottom-0 w-[100%] bg-slate-900 "></div>
            )}
          </div> */}
          <div className="fixed bottom-0 w-[100%] bg-white ">
            {tab === "home" && <SearchBar />}
            {/* <ChatFooter /> */}
          </div>
        </div>
      )}
      {/* <button
        className="absolute bottom-0 right-0 lg:mr-[50px] min-[320px]:mr-[20px] mb-[20px] rounded-3xl bg-[#156FEF] w-[50px] h-[50px] text-[white] flex justify-center items-center"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        {isChatOpen ? <Xicon /> : <Iicon />}
      </button> */}
    </div>
  );
};

export default ChatWidget;
