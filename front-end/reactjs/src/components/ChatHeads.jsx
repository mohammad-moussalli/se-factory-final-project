import React from "react";
import "../style/chat-heads.css";

const ChatHeads = ({ items, setReceiver }) => {

  return (
    <div>
      <div className="conv-header-container">
        <p className="conversations-header">Buddies</p>
        <div>
        </div>
      </div>
      <div className="chat-heads-container">
        {items.map((obj, i) => (
          <div
            key={i}
            className="chat-head-item"
            onClick={() => setReceiver(obj)}
          >
            <div className="user-profile-pic-container">
              <p className="user-profile-pic-text">{obj.email[0]}</p>
            </div>
            <p>{obj.first_name + ' ' + obj.last_name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChatHeads