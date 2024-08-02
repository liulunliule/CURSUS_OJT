import React from "react";
import {
  mess1,
  mess2,
  mess3,
  mess4,
  mess5,
  mess6,
  mess7,
  mess8,
} from "../../assets";
import "./index.scss";

function messList() {
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

  return (
    <>
      <aside className="message-list">
        <input
          type="text"
          className="add mess"
          placeholder="Search Messages..."
        />
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
                {msg.unread && (
                  <span className="unread-count">{msg.unread}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}

export default messList;
