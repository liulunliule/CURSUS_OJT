import React from "react";
import "./index.scss";
import { mess1 } from "../../assets";
import { mess2 } from "../../assets";
import { mess3 } from "../../assets";
import { mess4 } from "../../assets";
import { mess5 } from "../../assets";
import { mess6 } from "../../assets";
import { mess7 } from "../../assets";
import { mess8 } from "../../assets";
import { useSelector } from "react-redux";
import MessList from "./messList";
import Chat from "./chat";
const messages = [
  {
    name: "John Doe",
    text: "Hi! Sir, How are you. I ask you one thing pl...",
    time: "7 hours ago",
    avatar: mess1,
    unread: 2,
  },
  {
    name: "Kerstin Cable",
    text: "Hello, I paid you video tutorial but did not...",
    time: "8 hours ago",
    avatar: mess2,
    unread: 3,
  },
  {
    name: "Jose Portilla",
    text: "Thanks Sir, Such a nice video.",
    time: "15 hours ago",
    avatar: mess3,
    unread: 1,
  },
  {
    name: "Farhat Amin",
    text: "Hi! Sir, this is a purchase key CFKX12536...",
    time: "22 hours ago",
    avatar: mess4,
    unread: 7,
  },
  {
    name: "Kyle Pew",
    text: "Pls! Upload .NET Course",
    time: "2 days ago",
    avatar: mess5,
    unread: 12,
  },
  {
    name: "Eli Natoli",
    text: "Hi Sir thank you very very much for bootst...",
    time: "5 days ago",
    avatar: mess6,
  },
  {
    name: "Jaysen Batchelor",
    text: "Thank you! Sir",
    time: "7 days ago",
    avatar: mess7,
    unread: 6,
  },
  {
    name: "Quinton Batchelor",
    text: "Hey!",
    time: "13 days ago",
    avatar: mess8,
    unread: 1,
  },
];

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

const Messages = () => {
  const isShowAll = useSelector((state) => state.savedCourse.isShowAll);
  return (
    <div className="chat-tab">
      <header className="chatting-header">
        <h2>Messages</h2>
      </header>
      <div className={`chat-app ${isShowAll ? "active" : ""}`}>
        <MessList />
        {/* <aside className="message-list">
          <input type="text" placeholder="Search Messages..." />
          <ul>
            {messages.map((msg, index) => (
              <li
                key={index}
                className={`message-item ${index === 0 ? "first" : ""}`}
              >
                <img src={msg.avatar} alt={msg.name} />
                <div className="message-info">
                  <h3>{msg.name}</h3>
                  <p>{msg.text}</p>
                </div>
                <div className="time-unread-wrapper">
                  <span className="time">{msg.time}</span>
                  {msg.unread > 0 && (
                    <span className="unread-count">{msg.unread}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </aside> */}
        <main className="chat-window">
          <Chat />
          {/* <header className="chat-header">
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
          </footer> */}
        </main>
      </div>
    </div>
  );
};

export default Messages;
