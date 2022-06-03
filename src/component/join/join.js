import React, { useState } from "react";
import "./join.css";
import { Link } from "react-router-dom";
import hotkeys from "hotkeys-js";

export let user;

const Join = () => {
  hotkeys("ctrl+r,f5, ctrl+f5 ,ctrl+f4", (e) => {
    e.preventDefault();
  });
  const [userName, setUserName] = useState();
  const joinToChat = (event) => (userName ? null : event.preventDefault());

  user = userName;
  return (
    <div>
      <div className="JoinPage">
        <div className="JoinContainer">
          <h1>Live chat</h1>
          <input
            type="text"
            placeholder="Enter Your Name"
            id="joinInput"
            onBlur={(e) => {
              setUserName(e.target.value);
            }}
          />
          <Link to="/chat" onClick={joinToChat}>
            <button id="enter" className="joinBtn">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Join;
