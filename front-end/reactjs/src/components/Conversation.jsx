import React, { useRef, useState, useEffect } from "react";
import { doc, getDoc, updateDoc, setDoc, onSnapshot } from "firebase/firestore";
import "../style/conversation.css";
import { getFirestore } from "firebase/firestore";
import { FaCommentAlt, FaComments } from "react-icons/fa";

const Conversation = ({ receiver, user }) => {

const db = getFirestore();

  const [conversationId, setConversationId] = useState(null);
  const [messages, setMessages] = useState([]);

  const currentMessage = useRef(null);
  const chatBodyRef = useRef(null);

  const sendMessage = async () => {
    if (!currentMessage.current.value) return;

    const myMessage = {
      message: currentMessage.current.value,
      uid: user.uid,
    };

    const conversationRef = doc(db, "conversations", conversationId);
    const docSnap = await getDoc(conversationRef);

    if (docSnap.exists()) {
      const docData = docSnap.data();
      await updateDoc(conversationRef, {
        messages: [...docData.messages, myMessage],
      });
    } else {
      await setDoc(doc(db, "conversations", conversationId), {
        messages: [myMessage],
      });
    }

    currentMessage.current.value = "";
  };

  useEffect(() => {
    if (!receiver || !user) return;

    let myConvId;

    if (receiver.uid > user.uid) myConvId = receiver.uid + user.uid;
    else myConvId = user.uid + receiver.uid;

    setConversationId(myConvId);
  }, [receiver, user]);

  useEffect(() => {
    if (!conversationId) return;

    const unsub = onSnapshot(
      doc(db, "conversations", conversationId),
      (doc) => {
        const currentData = doc.data();

        if (currentData?.messages.length > 0) setMessages(currentData.messages);
        else setMessages([]);
      }
    );

    return unsub;
  }, [conversationId]);

  const handleEnterKeyPressDown = (e) => {
    if ((e.code === "Enter" || e.key === "Enter") && !e.shiftKey) {
      sendMessage();
    }
  };

  const scollToBottomOfChat = () => {
    if (!chatBodyRef.current) return;
    chatBodyRef.current.style.scrollBehavior = "smooth";
    chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
  };

  useEffect(() => {
    scollToBottomOfChat();
  }, [messages, chatBodyRef]);
  return (
    <div>
      {receiver ? (
        <div>
          <div className="user-conversation-header">
            <div className="user-conv-header-container">
              <div className="user-profile-pic-container">
                <p className="user-profile-pic-text">{receiver.email[0]}</p>
              </div>
              <p>{receiver.first_name + ' ' + receiver.last_name}</p>
            </div>
          </div>

          <div className="conversation-messages" ref={chatBodyRef}>
            {messages.length > 0 ? (
              messages.map((obj, i) => (
                <div
                  key={i}
                  className="message-container"
                  style={{ justifyContent: obj.uid === user.uid && "flex-end"}}
                > 
                  <div className="message-bubble" style={{ backgroundColor: obj.uid === user.uid ? '#25D366' : "dodgerblue"}}>{obj.message}</div>
                </div>
              ))
            ) : (
              <div className="no-conversation">
                <div>
                  <FaComments />
                </div>
                <p>Start a conversation with {receiver.first_name + ' ' + receiver.last_name}</p>
              </div>
            )}
          </div>

          <div className="input-container">
            <div className="input-message">
              <input className='input-chat'placeholder="Enter a text" ref={currentMessage} onKeyPress={handleEnterKeyPressDown} />
            </div>
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      ) : (
        <div className="no-conversation">
          <div>
            <FaCommentAlt />
          </div>
          <p>Pick someone to talk to.</p>
        </div>
      )}
    </div>
  )
}

export default Conversation