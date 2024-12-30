import React, { useContext } from "react";
import { Home, HomeActive, Noti, NotiActive } from "../Icons";
import { GlobalStateContext } from "../../ContextState";

const ChatFooter = () => {
  const { tab, setTab, style } = useContext(GlobalStateContext);
  return (
    <>
      <div className="flex items-center  justify-around shadow-top h-[54px]">
        <div
          className="flex w-[25%] items-center justify-center cursor-[pointer]"
          onClick={() => setTab("home")}
        >
          {tab === "home" ? <HomeActive color={style.icon.stroke} /> : <Home />}
        </div>
        <div
          className="flex w-[25%] items-center justify-center cursor-[pointer]"
          onClick={() => setTab("noti")}
        >
          {tab === "noti" ? <NotiActive color={style.icon.stroke} /> : <Noti />}
        </div>
      </div>
    </>
  );
};

export default ChatFooter;
