import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { Plus, Send } from "../Icons";
import { SeparateStateContext } from "../../ContextState";
import { GlobalStateContext } from "../../../../components/ChatWiget/ContextState";

const SearchBar = () => {
  // const { searchVal, setSearchVal, setChatData, chatData, sendMessage } =
  //   useContext(SeparateStateContext);
  const { searchVal, setSearchVal, setChatData, chatData, sendMessage } =
    useContext(GlobalStateContext);

  const hanldeSend = (e) => {
    var repl = searchVal.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
    if (repl !== "") {
      const socMsg = {
        msg_type: "query",
        query: repl,
        msg_id: uuidv4(),
      };
      sendMessage(socMsg);
      // if (repl !== "") {
      //   const newchat = {
      //     msg: repl,
      //     user: "sender",
      //   };
      //   console.log(newchat, "newChat");
      //   setChatData([...chatData, newchat]);
    }
    setSearchVal("");
  };

  return (
    <div className="mb-[16px] mx-[12px] py-[2px] px-[12px] border border-gray-300 rounded-xl">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[16px]">
          <button className="bg-[#156FEF] w-[36px] h-[36px] flex items-center justify-center rounded-3xl ">
            <Plus />
          </button>
          <input
            type="text"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            placeholder="Message here..."
            className="p-[10px] outline-none text-[16px] min-[320px]:w-[150px] md:w-[80vw]"
          />
        </div>
        <button
          className=" w-[36px] h-[36px] flex items-center justify-end rounded-3xl"
          onClick={hanldeSend}
        >
          <Send />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
