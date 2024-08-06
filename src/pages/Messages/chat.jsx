import React from "react";
import "./index.scss";
import { mess1 } from "../../assets";

const Chat = () => {
  const currentChat = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor.",
      time: "Sat, April 10, 1:08 PM",
      isOwnMessage: true,
    },
    {
      text: "Cras ultricies ligula.",
      time: "5 minutes ago",
      isOwnMessage: false,
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor.",
      time: "Sat, April 10, 1:08 PM",
      isOwnMessage: true,
    },
    {
      text: "Lorem ipsum dolor sit amet",
      time: "2 minutes ago",
      isOwnMessage: false,
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor.",
      time: "Sat, April 10, 1:08 PM",
      isOwnMessage: true,
    },
    { text: "....", time: "Typing...", isOwnMessage: false },
  ];
  return (
    <>
      <header className="chat-header">
        <img src={mess1} alt="John Doe" />
        <div className="header-content">
          <h3>John Doe</h3>
          <span className="status">ONLINE</span>
        </div>
        <div className="options-menu">
          <div className="ellipsis">...</div>
          <ul className="menu-items">
            <li>Delete</li>
            <li>Block</li>
            <li>Report</li>
            <li>Mute</li>
          </ul>
        </div>
      </header>
      <div className="chat-messages">
        {currentChat.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${msg.isOwnMessage ? "own" : ""}`}
          >
            <p>{msg.text}</p>
            <span className="time">{msg.time}</span>
          </div>
        ))}
      </div>
      <footer className="chat-input">
        <input type="text" placeholder="Write a message..." />
        <button>&#9658;</button>
      </footer>
    </>
  );
};

export default Chat;
