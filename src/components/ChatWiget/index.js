import React, { useContext, useEffect, useState } from "react";
import { Iicon, Xicon } from "./ChatComponents/Icons";
import ChatHeader from "./ChatComponents/components/ChatHeader";
import ChatBody from "./ChatComponents/components/ChatBody";
import SearchBar from "./ChatComponents/components/SearchBar";
import { GlobalStateContext } from "./ContextState";
import ChatFooter from "./ChatComponents/components/ChatFooter";
import stylw from "./style.json";
import { Box, colors, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#156FEF",
    },
    secondary: {
      main: "#FFFFFF",
    },
    background: {
      paper: "#000000",
    },
    messageBg: {
      sender: "#ECF4FF",
      receiver: "#F7F8F9",
    },
    messageTxt: {
      sender: "#2C3E5D",
      receiver: "#44546F",
    },
  },
  typography: {
    sender: {
      fontSize: "12px",
      fontWeight: 400,
    },
  },
});

const ChatWidget = () => {
  const [stldata, setstlData] = useState(theme);
  const { isExpanded, chatData, tab, isChatOpen, setIsChatOpen, setStyle } =
    useContext(GlobalStateContext);

  const handleCloses = () => {
    setIsChatOpen(!isChatOpen);
  };

  useEffect(() => {
    //Api Calling -- JSON

    const dynamicTheme = createTheme({
      palette: {
        primary: {
          main: stylw.color.text,
        },
        chip: {
          background: stylw.chip.bg,
          text: stylw.chip.text,
        },
        background: {
          paper: stylw.paper,
        },
        messageBg: {
          sender: stylw.msgBg.sender,
          receiver: stylw.msgBg.receiver,
        },
        // messageTxt: {
        //   sender: "#2C3E5D",
        //   receiver: "#44546F",
        // },
      },
      typography: {
        sender: {
          fontSize: "14px",
          fontWeight: 400,
          color: stylw.messageTxt.sender,
        },
        receiver: {
          fontSize: "14px",
          fontWeight: 400,
          color: stylw.messageTxt.receiver,
        },
      },
    });

    setStyle(stylw);
    setstlData(dynamicTheme);
  }, []);

  console.log(stldata, "stldata");
  return (
    <ThemeProvider theme={stldata}>
      <div className="fixed  bottom-0 right-0 z-[999] ">
        {isChatOpen && (
          <div
            className={`flex flex-col overflow-y-scroll hide-scrollbar shadow-outer absolute bottom-[60px] right-0 lg:mr-[40px] min-[320px]:mr-[10px] mb-[20px]  bg-white ${
              isExpanded
                ? "md:w-[750px] min-[320px]:w-[300px]"
                : "md:w-[380px] min-[320px]:w-[300px]"
            }  lg:h-[85vh] min-[320px]:h-[80vh] rounded-[10px] overflow-x-auto no-scrollbar`}
          >
            <Box position="sticky" top={0} bgcolor="background.paper">
              <ChatHeader />
            </Box>
            <Box
              className={` ${
                chatData.length > 0 && tab === "home"
                  ? "flex flex-col mt-[auto]"
                  : "h-[100%]"
              }`}
            >
              <ChatBody />
            </Box>
            <div className="sticky bottom-0 w-[100%] bg-white ">
              {tab === "home" && <SearchBar />}
              <ChatFooter />
            </div>
          </div>
        )}
        <button
          className="absolute bottom-0 right-0 lg:mr-[50px] min-[320px]:mr-[20px] mb-[20px] rounded-3xl bg-[#156FEF] w-[50px] h-[50px] text-[white] flex justify-center items-center"
          onClick={handleCloses}
        >
          {isChatOpen ? <Xicon /> : <Iicon />}
        </button>
      </div>
    </ThemeProvider>
  );
};

export default ChatWidget;
