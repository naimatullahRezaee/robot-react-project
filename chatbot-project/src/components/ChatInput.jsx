import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";

function ChatInput({ chatMessages, setChatMessage }) {
  const [inputText, setInputText] = useState("");

  function saveInputData(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        id: crypto.randomUUID(),
        message: inputText,
        sender: "user",
      },
    ];
    setChatMessage(newChatMessages);
    const response = Chatbot.getResponse(inputText);
    setChatMessage([
      ...newChatMessages,
      {
        id: crypto.randomUUID(),
        message: response,
        sender: "robot",
      },
    ]);

    setInputText("");
  }
  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to the chatbot"
        size="30"
        onChange={saveInputData}
        value={inputText}
        className="chat-input"
      />
      <button className="send-btn" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}

export default ChatInput;
