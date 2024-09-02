import React, { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const chipArrayData = [
  "General policies",
  "Payroll and Compensation",
  "Company’s leave policies",
];

const sampleChip = [
  "How do I apply for leave?",
  "What holidays does the company observe?",
];

// const chatdatas = [
//   {
//     msg: "hello",
//     user: "sender",
//   },
//   {
//     msg: "how are you",
//     user: "receiver",
//   },
//   {
//     msg: "im Fine,How are you",
//     user: "sender",
//   },
//   {
//     msg: "Good!..Very good",
//     user: "receiver",
//   },
//   {
//     msg: "Leave Types:Includes vacation, sick leave, personal leave, and special leaves like maternity/paternity.Leave Entitlement:You have a set number of days based on your employment status. Check your balance anytime.Application: Submit leave requests through the HR portal. Approval is needed from your manager.Carry Over:Some leave types can be carried over to the next year. Please check the specifics in the policy.Special Leaves: Additional guidelines apply for maternity/paternity and bereavement leave.For more details, please refer to the employee handbook or contact HR. How else can I assist you today? 😊",
//     user: "receiver",
//   },
// ];

const chatdatas = [];
// Create the context
export const GlobalStateContext = createContext("");
export const SocketContext = createContext(null);
let socket = null;

export const initSocket = async () => {
  // const token = localStorage.getItem("jwtToken");
  const URL = "wss://fexo.io/xt_pro";

  if (!socket) {
    socket = io(URL, {
      // auth: {
      //   "x-authorization": token,
      // },
      // auth:token,
      transports: ["websocket"],
      upgrade: false,
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 4,
    });
    // await getAudio()
    socket.on("emitName", (messageData) => {
      console.log(messageData, "___________");
    });

    // socket.on("sendMessage", (messageData) => {});
    // socket.on("joinChannel", (messageData) => {});
    // socket.on("exitChannel", (messageData) => {});
    // socket.on("seenMessages", (messageData) => {});
    // socket.on("messageSawBroadcast", (messageData) => {});
  }
  console.log("sohh", socket);
  return socket;
};

export const GlobalStateProvider = ({ children }) => {
  //Socket State
  const [socket, setSocket] = useState(null);

  const createConnection = async () => {
    const socketInstance = await initSocket();
    setSocket(socketInstance);
  };

  useEffect(() => {
    createConnection();
    return () => {
      socket?.disconnect();
    };
  }, []);

  console.log(socket, "socket45465");

  // Define different states
  const [tab, setTab] = useState("home");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [userName, setUserName] = useState("User Name");
  const [chipData, setChipData] = useState(chipArrayData);
  const [chatData, setChatData] = useState(chatdatas);
  const [isExpanded, setIsExpanded] = useState(false);

  // Create a value object that will be passed to the provider
  const value = {
    //socket
    socket,

    isChatOpen,
    setIsChatOpen,
    searchVal,
    setSearchVal,
    userName,
    setUserName,
    tab,
    setTab,
    chipData,
    setChipData,
    chatData,
    setChatData,
    isExpanded,
    setIsExpanded,

    sampleChip,
  };

  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
};
