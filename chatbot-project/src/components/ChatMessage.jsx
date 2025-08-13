import RobatProfileImage from "../assets/robot.png";
import UserProfileImage from "../assets/user.png";
import "./ChatMessage.css";

function ChatMessage({ message, sender }) {
  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && <img src={RobatProfileImage} alt="" width="40" />}
      <div className="chat-message-text">{message}</div>

      {sender === "user" && <img src={UserProfileImage} alt="" width="40" />}
    </div>
  );
}

export default ChatMessage;
