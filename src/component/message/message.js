/* import React from "react";
import "./message.css";
const Message = () => {
  return (
    <div>
      <div className="chat_body">
        <p className="chat_reciever chat">
          <span className="chat_name"> Reciever</span>
          This is a message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_sender chat">
          <span className="chat_name"> sender</span>
          This is a message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
        
      </div>
    </div>
  );
};

export default Message;
 */

import React from "react";
import "./message.css";

export function Message({ message, classs, user }) {
  // console.log(user);
  if (user) {
    return (
      <div className={`messageBox ${classs}`}>{`${user}: ${message}`}</div>
    );
  } else {
    return <div className={`messageBox ${classs}`}>{`You :${message}`}</div>;
  }
}
