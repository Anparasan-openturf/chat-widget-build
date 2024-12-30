import React, { useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import hand from "../../../../assets/chatIcons/hand.svg";
import { Box, Chip, Typography } from "@mui/material";
import { GlobalStateContext } from "../../ContextState";
import { Ticket, TicketActive } from "../Icons";
import { useRef } from "react";
import robot from "../../../../assets/images/robot.png";
import user from "../../../../assets/images/avatar.png";
import "../../index.css";

const ChatBody = () => {
  const {
    chatData,
    loader,
    tab,
    userName,
    setSearchVal,
    chipData,
    sampleChip,
    sendMessage,
    sessionId,
    setChipDataMessage,
    isExpanded,
  } = useContext(GlobalStateContext);

  const handleChatChips = (searchVal) => {
    var repl = searchVal.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
    if (repl !== "") {
      const socMsg = {
        msg_type: "query_req",
        query: repl,
        msg_id: uuidv4(),
        session_id: sessionId,
        env: "staging",
        stream: false,
        filters: {},
        tenant: "",
      };
      sendMessage(socMsg);
      // const newchat = {
      //   msg: repl,
      //   user: "sender",
      // };
      // console.log(newchat, "newChat");
      // setChatData([...chatData, newchat]);
    }
    setSearchVal("");
  };

  const handleChatChipsMessage = (each) => {
    setChipDataMessage(each);
  };

  const MessageEndRef = useRef(null);
  useEffect(() => {
    MessageEndRef?.current?.scrollIntoView();
  }, [chatData, isExpanded]);

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
                  <img
                    src={each.user === "receiver" ? robot : user}
                    alt=""
                    className={`min-w-[34px] max-w-[34px] min-h-[34px] max-h-[34px] rounded-3xl mt-[auto] mb-[20px] object-contain ${
                      each.user === "sender" ? "bg-[#ECF4FF]" : "bg-[#F7F8F9]"
                    }`}
                  />

                  <div className="">
                    <Typography
                      variant={each.user === "sender" ? "sender" : "receiver"}
                      bgcolor={
                        each.user === "sender"
                          ? "messageBg.sender"
                          : "messageBg.receiver"
                      }
                      className={` min-h-[40px] flex items-center px-[12px] py-[10px] flex flex-wrap text-pretty ${
                        each.user === "sender"
                          ? "rounded-tl-[8px] rounded-tr-[8px] rounded-br-[0px] rounded-bl-[8px] ml-[40px]"
                          : "rounded-tl-[8px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[0px] mr-[40px]"
                      }`}
                      sx={
                        each.user === "sender"
                          ? { marginLeft: "50px" }
                          : { marginRight: "50px" }
                      }
                    >
                      {each.user === "sender" ? each.msg : each.msg}
                    </Typography>
                    <p
                      className={`text-[#8590A2] text-[10px] pt-[5px] ${
                        each.user === "sender" ? "text-right" : ""
                      }`}
                    >
                      {each?.time}
                    </p>
                  </div>
                </div>
              ))}
              {loader && (
                <div className="text-sm flex justify-start mb-8">
                  <div className="rounded-lg p-2 max-w-md self-start">
                    <span className="typing-animation">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </span>
                  </div>
                </div>
              )}
              {!loader && (
                <div className="flex gap-2 flex-wrap">
                  {sampleChip?.map((each, index) => {
                    if (index > -1) {
                      return (
                        <Chip
                          key={index}
                          label={each?.question}
                          variant="outlined"
                          sx={{
                            fontSize: "12px",
                            borderColor: "chip.background",
                            color: "chip.text",
                          }}
                          // onClick={() => setSearchVal(each)}
                          onClick={() => handleChatChipsMessage(each)}
                        />
                      );
                    }
                  })}
                </div>
              )}

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
              <div ref={MessageEndRef} />
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
                <Typography
                  color={"primary.main"}
                  sx={{ fontSize: "40px", fontWeight: "600px !important" }}
                  // className="text-[40px] text-[#156FEF] font-600"
                >
                  {userName}
                </Typography>
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
            <Typography
              color={"primary.main"}
              sx={{ fontSize: "40px", fontWeight: "600px !important" }}
              // className="text-[40px] text-[#156FEF] font-600"
            >
              {userName}
            </Typography>
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
