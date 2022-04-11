import React from "react";
import "../style/chat-heads.css";
import { useState } from "react";

const ChatHeads = ({ items, setReceiver }) => {
  const [query, setQuery] = useState("")
  return (
    <div>
      <div className="conv-header-container">
        <p className="conversations-header">Buddies</p>
        <div>
        </div>
      </div>
      <input className="chat-heads-search" placeholder="Search for Buddies" onChange={event => setQuery(event.target.value)}/>

      <div className="chat-heads-container">

        {items.filter(obj => {
          if (query === '') {
            return obj;
          } else if (obj.first_name.toLowerCase().includes(query.toLowerCase())) {
            return obj;
          }
          }).map((obj, i) => (
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