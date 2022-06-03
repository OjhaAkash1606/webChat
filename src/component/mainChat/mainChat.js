import React, { useState, useEffect } from "react";
import "./mainChat.css";
// import Join from "../join/join";
// import Sidebar from "../sidebar/sidebar";
// import Chat from "../chat/chat";
import { Chatbar } from "../../containers/container";
import Sidebar from "../../containers/container";

import { user } from "../join/join";
import socketIO from "socket.io-client";
// import { renderMatches } from "react-router-dom";
const endPoint = "http://localhost:3009";
let socket;
// let userData;
// console.log(newPerson);
const MainChat = (prop) => {
  let [userList, setUserList] = useState();
  let [senderDetail, setSenderDetail] = useState([]);
  let [userData, setUserData] = useState();
  // let [allUser, setAllUser] = useState();
  // console.log(prop);
  useEffect(() => {
    socket = socketIO(endPoint, { transports: ["websocket"] });

    socket.on("connect", () => {
      // console.log("hello connected");
      socket.emit("joined", user);
    });

    socket.on("userList", (data) => {
      // console.log(data);
      setUserList(data);
    });
    socket.on("allUser", (data) => {
      setUserList(data);
    });

    socket.on("userData", (data) => setUserData(data));

    socket.on("removeUser", (data) => {
      setUserList(data);
    });

    // console.log("useEffect");
  }, []);

  useEffect(() => {
    socket.on("messages", (data) => {
      // console.log(data);
      setSenderDetail(data);
    });
  });

  /* socket.emit("joined", { user });

    socket.on("cUser", (data) => {
      let currentStore = data;
      setCurrentUser(currentStore);
    });

    socket.on("list", (user) => {
      let listStore = user;
      setUserList(listStore);
    }); */
  /*   }); */

  const render = () => {
    setSenderDetail([...senderDetail]);
  };

  const getMessage = (toId, toName, fromMessage) => {
    console.log("ëmit");
    socket.emit("message", {
      toId,
      toName,
      fromMessage,
      fromId: userData.id,
      fromName: userData.name,
    });
    render();
  };

  const removeUser = ({ rmUserId, rmUserName }) => {
    console.log(rmUserId, rmUserName);
    socket.emit("rmUser", { rmUserId, rmUserName });
  };

  return (
    <>
      <div className="app">
        <div className="app_body">
          <Sidebar
            dataList={userList}
            currentData={userData}
            removeUser={removeUser}
          />
          <Chatbar
            dataList={userList}
            get={getMessage}
            send={senderDetail}
            currentData={userData}
          />
        </div>
      </div>
    </>
  );
};

export default MainChat;
