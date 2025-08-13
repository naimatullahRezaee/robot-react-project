import { useRef, useEffect } from "react";

import ChatMessage from "./ChatMessage";
import "./ChatMessages.css";

function ChatMessages({ chatMessages }) {
  const chatMessageRef = useRef(null);

  useEffect(() => {
    const containerElm = chatMessageRef.current;
    if (containerElm) {
      containerElm.scrollTop = containerElm.scrollHeight;
    }
  }, [chatMessages]);
  return (
    <div className="chat-messages-container" ref={chatMessageRef}>
      {chatMessages.map((chatmessage) => {
        return (
          <ChatMessage
            key={chatmessage.id}
            message={chatmessage.message}
            sender={chatmessage.sender}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;
