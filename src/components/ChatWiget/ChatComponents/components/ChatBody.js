import React, { useContext } from "react";
import hand from "../../../../assets/chatIcons/hand.svg";
import { Chip } from "@mui/material";
import { GlobalStateContext } from "../../ContextState";
import { Ticket, TicketActive } from "../Icons";

const ChatBody = () => {
  const {
    chatData,
    setChatData,
    tab,
    userName,
    setSearchVal,
    chipData,
    sampleChip,
  } = useContext(GlobalStateContext);

  const handleChatChips = (searchVal) => {
    var repl = searchVal.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
    if (repl !== "") {
      const newchat = {
        msg: repl,
        user: "sender",
      };
      console.log(newchat, "newChat");
      setChatData([...chatData, newchat]);
    }
    setSearchVal("");
  };

  return (
    <div className="px-[20px] py-[10px] h-[100%]">
      {tab === "home" && (
        <div className="h-[100%]">
          {chatData.length > 0 ? (
            <div className="flex flex-col mt-[auto] gap-y-[4px] overflow-y-scroll hide-scrollbars">
              {chatData.map((each) => (
                <div
                  className={`max-w-[100%] ${
                    each.user === "sender" ? "ml-[auto] flex-row-reverse" : ""
                  } flex gap-2 items-center text-[14px]`}
                >
                  {/* use image tag if needed */}
                  <div
                    scr=""
                    alt=""
                    className={`min-w-[34px] min-h-[34px] rounded-3xl mt-[auto] mb-[20px] ${
                      each.user === "sender" ? "bg-[#ECF4FF]" : "bg-[#F7F8F9]"
                    }`}
                  />
                  <div className="">
                    <p
                      className={` min-h-[40px] flex items-center px-[12px] py-[10px] flex flex-wrap text-pretty ${
                        each.user === "sender"
                          ? "bg-[#ECF4FF] text-[#2C3E5D] rounded-tl-[8px] rounded-tr-[8px] rounded-br-[0px] rounded-bl-[8px] ml-[40px]"
                          : "bg-[#F7F8F9] text-[#44546F] rounded-tl-[8px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[0px] mr-[40px]"
                      }`}
                    >
                      {each.msg}
                    </p>
                    <p
                      className={`text-[#8590A2] text-[10px] pt-[5px] ${
                        each.user === "sender" ? "text-right" : ""
                      }`}
                    >
                      10:10 AM
                    </p>
                  </div>
                </div>
              ))}
              <div className="flex gap-2 flex-wrap">
                {sampleChip.map((each) => {
                  return (
                    <Chip
                      label={each}
                      variant="outlined"
                      sx={{
                        fontSize: "12px",
                        borderColor: "#156FEF",
                        color: "#156FEF",
                      }}
                      // onClick={() => setSearchVal(each)}
                      onClick={() => handleChatChips(each)}
                    />
                  );
                })}
              </div>

              {/* Raise Ticket */}

              {/* {chatData.length > 1 && (
                <div className="flex flex-col justify-center items-center pt-[14px] gap-2 ">
                  <p className="text-[#2C3E5D] font-600 text-[14px]">
                    Not the right answer?
                  </p>
                  <p className="flex items-center justify-center gap-1 text-[#156FEF] font-600 text-[12px] cursor-pointer">
                    <span>
                      <TicketActive props={12} />
                    </span>
                    Raise a ticket!
                  </p>
                </div>
              )} */}
            </div>
          ) : (
            <div className="h-[100%] py-[16px] px-[24px] flex flex-col justify-between">
              <div>
                <p className="flex items-center text-[40px] text-[#2C3E5D] font-600">
                  Hi
                  <span>
                    <img src={hand} alt="hand" />
                  </span>
                </p>
                <p className="text-[40px] text-[#156FEF] font-600">
                  {userName}
                </p>
                <p className="text-[20px] text-[#758195] font-500 pt-[10px]">
                  How can I help you today?
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                {chipData.map((each) => {
                  return (
                    <Chip
                      label={each}
                      variant="outlined"
                      sx={{
                        fontSize: "12px",
                        borderColor: "#156FEF",
                        color: "#156FEF",
                      }}
                      onClick={() => handleChatChips(each)}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
      {tab === "noti" && (
        <div className="py-[16px] px-[24px] h-[100%] flex flex-col justify-between">
          <div>
            <p className="flex items-center text-[40px] text-[#2C3E5D] font-600">
              Hi
              <span>
                <img src={hand} alt="hand" />
              </span>
            </p>
            <p className="text-[40px] text-[#156FEF] font-600">{userName}</p>
            <p className="text-[20px] text-[#758195] font-500 pt-[10px]">
              Start your Quiz
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBody;
