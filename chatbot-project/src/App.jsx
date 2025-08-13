import { useState } from "react";
import ChatInput from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";
import "./App.css";

function App() {
  const [chatMessages, setChatMessage] = useState([
    {
      id: 1,
      message: "hello chatbot",
      sender: "user",
    },
    {
      id: 2,
      message: "Hello! How can I help you?",
      sender: "robot",
    },
    {
      id: 3,
      message: "can you get me todays date?",
      sender: "user",
    },
    {
      id: 4,
      message: "Todays is July 28",
      sender: "robot",
    },
  ]);
  return (
    <div className="app-container">
      <ChatMessages
        chatMessages={chatMessages}
        setChatMessage={setChatMessage}
      />

      <ChatInput chatMessages={chatMessages} setChatMessage={setChatMessage} />
    </div>
  );
}

export default App;
