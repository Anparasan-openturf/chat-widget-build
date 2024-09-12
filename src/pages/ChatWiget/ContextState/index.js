import React, { createContext, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
// Sample data
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
export const SeparateStateContext = createContext("");

export const SeparateStateProvider = ({ children }) => {
  // WebSocket State
  const [messages, setMessages] = useState([]);
  const [loader, setLoader] = useState(false);
  const websocketRef = useRef(null); // WebSocket reference
  const URL = "wss://sandbox.openturf.dev/ws/faq/search";
  useEffect(() => {
    // Create WebSocket connection
    // websocketRef.current = new WebSocket(URL);
    // // Connection opened
    // websocketRef.current.onopen = () => {
    //   console.log("Socket-Logs", "WebSocket connection established");
    // };
    // // Listen for messages
    // websocketRef.current.onmessage = (event) => {
    //   setLoader(true);
    //   const newMessage = JSON.parse(event.data);
    //   if (newMessage.msg_type === "ack") {
    //     // setTimeout(setLoader(true), 5000);
    //     if (newMessage.status === "failed") {
    //       const receivedMsg = {
    //         msg: ["No Information...."],
    //         user: "receiver",
    //         // _id: uuidv4(),
    //       };
    //       setLoader(false);
    //       setChatData((prevMessages) => [...prevMessages, receivedMsg]);
    //       return;
    //     }
    //   }
    //   if (newMessage.msg_type === "notify") {
    //     const receivedMsg = {
    //       msg: newMessage?.message.split("["),
    //       user: "receiver",
    //       _id: uuidv4(),
    //     };
    //     setLoader(false);
    //     setChatData((prevMessages) => [...prevMessages, receivedMsg]);
    //   }
    // };
    // // Handle errors
    // websocketRef.current.onerror = (error) => {
    //   console.error("Socket-Logs", "WebSocket Error:", error);
    // };
    // //Close
    // websocketRef.current.onclose = () => {
    //   console.log(
    //     "Socket-Logs",
    //     "WebSocket connection closed. Attempting to reconnect..."
    //   );
    // };
    // // Clean up on unmount
    // return () => {
    //   websocketRef.current.close();
    // };
  }, []);

  const sendMessage = (message) => {
    console.log(JSON.stringify(message), "sx message", "Socket-Logs");
    setChatData((prevChatData) => [
      ...prevChatData,
      { msg: message?.query, user: "sender", _id: message.msg_id },
    ]);
    if (
      websocketRef.current
      // websocketRef.current.readyState === WebSocket.OPEN
    ) {
      websocketRef.current.send(JSON.stringify(message));
    }
  };

  // Define different states
  const [tab, setTab] = useState("home");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [userName, setUserName] = useState("User Name");
  const [chipData, setChipData] = useState(chipArrayData);
  const [chatData, setChatData] = useState(chatdatas);
  const [isExpanded, setIsExpanded] = useState(false);

  console.log(chatData, "chatData");
  // Create a value object that will be passed to the provider
  const value = {
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
    sendMessage,
    messages,
    sampleChip,
    loader,
    setLoader,
  };

  return (
    <SeparateStateContext.Provider value={value}>
      {children}
    </SeparateStateContext.Provider>
  );
};
