import React, { memo, useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { TextareaAutosize } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { cn } from "../../utils/cn";
import { FexoAiIcon } from "../../assets/icons";
import "../../assets/styles/docQuery.css";
import getURL from "../../routes/api-urls";
import { useOutletContext } from "react-router-dom";
import "../../assets/styles/contentStyles.css";

const RenderReferences = ({ reference, onClickRef }) => {
  const [tempText, pageNo] = String(reference).split(", Page No:");
  const [id, text] = tempText.split(":");
  return (
    <>
      <p
        className={cn("ml-2 text-gray-600 text-base", {
          "cursor-pointer text-blue-500": Number(pageNo) > 0,
        })}
        onClick={() => {
          if (Number(pageNo) > 0) {
            onClickRef && onClickRef(id, Number(pageNo));
          }
        }}
      >
        {text}
      </p>
    </>
  );
};

const RenderAiMessage = ({ message, onClickRef }) => {
  const [text, ...rest] = String(message).split("ref-");
  const refs = Array.from(new Set(rest));
  return (
    <>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ node, ...props }) => (
            <p className="indent-3 text-justify pb-2" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <p className="indent-3 text-justify pb-2" {...props} />
          ),
          table: ({ node, ...props }) => (
            <p className="indent-3 text-justify pb-2" {...props} />
          ),
          link: ({ node, ...props }) => (
            <p
              className="indent-3 text-justify pb-2 text-blue-400"
              {...props}
            />
          ),
        }}
      >
        {text}
      </ReactMarkdown>
      {refs?.length ? (
        <>
          <label className="text-gray-500 text-base">References:</label>
          {refs?.map((ref, i) => (
            <RenderReferences key={i} reference={ref} onClickRef={onClickRef} />
          ))}
        </>
      ) : null}
    </>
  );
};

// const items = [
//   "Analyze the revenue recognition practices in the company’s latest financial statements. Highlight any signs of aggressive or premature recognition.",
//   `Compare the company’s net income to its operating cash flow over the past five years. Identify any significant discrepancies that could indicate earnings manipulation.`,
//   `Evaluate the impact of non-recurring items on the company’s reported earnings. Determine if these items could be used to manipulate financial results.`,
//   `Investigate related-party transactions disclosed in the financial statements. Assess whether these transactions appear to be conducted at arm’s length.`,
//   `Apply Benford’s Law to the company’s financial data and identify any anomalies that might indicate fraudulent activity.`,
//   `Review the notes to the financial statements for detailed disclosures about accounting policies. Identify any changes in policies and assess their impact on financial results.`,
//   `Analyze the company’s expense reporting practices. Look for any unusual patterns or instances where expenses might have been improperly deferred or capitalized.`,
// ];

function ChatInterface({ id }) {
  const [input, setInput] = useState("");
  const { setPageNumber, messages, setMessages, setDocumentId, documentId } =
    useOutletContext();

  const messagesContainerRef = useRef(null);

  const [isConnected, setChatConnectStatus] = useState(false);
  const [isTyping, setChatTypingStatus] = useState(false);
  // const [messages, setMessages] = useState([]);
  const [suggestionsVisible, setSuggestionsVisible] = useState(false);
  const chatConnection = useRef(null);
  const reconnectTimeout = useRef(null);

  const addChatMessage = (message) => {
    setMessages((oldState) => [...oldState, message]);
  };

  useEffect(() => {
    const connectWebSocket = (caller) => {
      if (chatConnection.current) chatConnection.current.close();
      console.log("WebSocket connecting...", caller);
      chatConnection.current = new WebSocket(getURL("docQuery").chat + id);

      chatConnection.current.onopen = () => {
        setChatConnectStatus(true);
        if (reconnectTimeout.current) {
          clearInterval(reconnectTimeout.current);
        }
      };

      chatConnection.current.onmessage = (event) => {
        setChatTypingStatus(false);
        addChatMessage({ isUser: false, text: event.data });
      };

      chatConnection.current.onclose = (event) => {
        console.log("WebSocket Closed");
        setChatTypingStatus(false);
        setChatConnectStatus(false);
        scheduleReconnect();
      };

      chatConnection.current.onerror = (error) => {
        console.log("WebSocket error", error);
      };
    };

    const scheduleReconnect = () => {
      if (reconnectTimeout.current) {
        clearInterval(reconnectTimeout.current);
      }
      reconnectTimeout.current = setInterval(() => {
        if (chatConnection.current !== null)
          connectWebSocket("scheduleReconnect");
      }, 2000);
    };

    if (chatConnection.current === null && String(id).length > 8) {
      connectWebSocket("connect");
    }

    return () => {
      if (chatConnection.current) {
        chatConnection.current.close();
        chatConnection.current = null;
      }
      if (reconnectTimeout.current) {
        clearInterval(reconnectTimeout.current);
      }
    };
  }, [id]);

  const sendMessage = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (chatConnection.current && text) {
      chatConnection.current.send(text);
      setInput("");
      setChatTypingStatus(true);
      addChatMessage({ isUser: true, text });
    }
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
    setSuggestionsVisible(!event.target.value?.length);
  };

  const showSuggestions = () => {
    if (!input?.length) setSuggestionsVisible(true);
  };

  const hideSuggestions = () => {
    setSuggestionsVisible(false);
  };

  const handleSuggestionClick = (ele) => {
    setInput(ele);
    hideSuggestions();
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      if (messagesContainerRef.current) {
        messagesContainerRef.current.scrollTo({
          top: messagesContainerRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    }, 100); // Adjust timeout as necessary
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const onClickRef = (id, page) => {
    if (page > 0 && id) {
      setPageNumber(page);
      if (id !== documentId) setDocumentId(id);
    }
  };

  return (
    <div className="h-full overflow-hidden">
      <div
        className="flex-1 p-4 overflow-y-auto h-full"
        ref={messagesContainerRef}
      >
        <div className="flex flex-col gap-2">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`text-sm flex justify-${
                message.isUser ? "end" : "start"
              }`}
            >
              {!message.isUser && <FexoAiIcon width={30} height={30} />}
              <div
                className={cn(
                  "rounded-lg p-2 my-2 max-w-[50vw] text-sm xl:text-base",
                  {
                    "bg-[#F9C77B] text-black self-end": message.isUser,
                    "bg-[#fcf0e9] text-black self-start": !message.isUser,
                  }
                )}
              >
                {!message.isUser ? (
                  <RenderAiMessage
                    message={message.text}
                    onClickRef={onClickRef}
                  />
                ) : (
                  <div className="max-w-2xl">{message.text}</div>
                )}
              </div>
            </div>
          ))}
          {isTyping ? (
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
          ) : (
            <div className="mb-7"></div>
          )}
        </div>
      </div>
      <div className="sticky bottom-0 w-full px-6">
        <div className="relative bg-transparent">
          <div className="flex items-center flex-grow bg-[#73247C] rounded-xl pr-2.5">
            <TextareaAutosize
              maxLength={500}
              value={input}
              onChange={handleInputChange}
              placeholder="Ask your query..."
              className="flex-grow resize-none px-4 py-2 rounded-xl bg-[#73247C] font-semibold text-white"
              maxRows={4}
              onFocus={showSuggestions}
            />
            <SendIcon
              disabled={isTyping || input.length < 1 || isConnected === false}
              onClick={sendMessage}
              className={cn("text-white cursor-pointer", {
                "cursor-not-allowed text-gray-500":
                  isTyping || input.length < 1 || isConnected === false,
              })}
            />
          </div>
        </div>
        {/* {suggestionsVisible && (
          <div className="absolute bottom-12 mt-2 w-[94%] rounded-2xl z-10 bg-transparent">
            <div className="flex justify-end">
              <div className="rounded-full w-8 h-8 bg-transparent flex items-center justify-center">
                <CloseIcon
                  onClick={hideSuggestions}
                  className="cursor-pointer text-red-400 hover:text-red-500"
                />
              </div>
            </div>
            <div className="bg-inherit">
              {items.map((ele) => (
                <div
                  key={ele}
                  onClick={() => handleSuggestionClick(ele)}
                  className="cursor-pointer rounded-2xl bg-[#f8e5f6] w-full h-full m-1 text-wrap truncate py-1 px-2 hover:shadow-lg hover:bg-[#fa95f2]"
                >
                  {ele}
                </div>
              ))}
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default memo(ChatInterface);
