import React from "react";
import { useState, useRef } from "react";
import firebase from "firebase";
import { firestore, firebaseAuth } from "./firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { BiSend } from "react-icons/bi";
import "./ChatRoom.css";
import "../styles/global.css";

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = firebaseAuth.currentUser;
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </main>

      <div>
        <form onSubmit={sendMessage}>
          <input
            maxLength={255}
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder="Digite uma mensagem"
          />
          <button type="submit" disabled={!formValue}>
            <BiSend className="send-icon" />
          </button>
        </form>
      </div>
    </>
  );
  function ChatMessage(props) {
    const { text, uid, photoURL, createdAt } = props.message;
    const locale = "pt-br";
    const option = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    var Timestamp = createdAt?.toDate().toLocaleDateString(locale, option);

    const messageClass =
      uid === firebaseAuth.currentUser.uid ? "sent" : "received";

    return (
      <>
        <div className={`message ${messageClass}`}>
          <img className="userIcon" src={photoURL} alt="userIcon" />

          <span>
            <p>{text}</p>
            <span className="timestamp">{Timestamp}</span>
          </span>
        </div>
      </>
    );
  }
}

export default ChatRoom;
