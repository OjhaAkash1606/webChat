import React, { useState, useEffect } from "react";
import "./chat.css";
import { Avatar, IconButton } from "@material-ui/core";
// import ReactScrollToBottom from "react-scroll-to-bottom";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import { Message } from "../message/message";

// import send from "../img/send.png";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";

const Chat = (prop) => {
  const [currentUser, setCurrentUser] = useState();
  const [userList, setUserList] = useState();
  const [message, setMessage] = useState("");
  const [allMessage, setAllMessage] = useState();
  // const [selectMessage, setSelectMessage] = useState([]);
  const [own, setOwn] = useState();

  // let all;
  // const [value, setValue] = useState();
  // console.log(currentUser);
  // console.log(own);
  console.log(allMessage);
  // console.log(selectMessage);

  /* const load = useCallback(() => {
    console.log(allMessage);
    allMessage?.map((item) =>
      (item?.toId === currentUser?.userId && item?.fromId === own?.id) ||
      (item?.toId === own?.id && item?.fromId === currentUser?.userId)
        ? console.log(item)
        : null
    );
  }, [allMessage, currentUser, own]);
 */
  useEffect(() => {
    // here current user has selected user in chat side
    setCurrentUser(prop.userData.selectData.at(-1));
    setUserList(prop.dataList);
    setAllMessage(prop.send);
    setOwn(prop.currentData);
  }, [prop]);

  // let selectPerson = prop.userData.selectData[0];
  // console.log(prop.userData.selectData[0]);

  // console.log(all);

  return (
    <>
      <div className="chat">
        {/* {console.log(currentUser?.userName)} */}
        {userList?.map((items) =>
          // console.log(currentUser);

          items?.userId === currentUser?.userId ? (
            <>
              <div className="chat_header" key={items.userId}>
                <Avatar />
                <div className="chat_headerInfo">
                  <h3>{items.userName}</h3>
                  <p>Last seen at...</p>
                  <span>{new Date().toUTCString()}</span>
                </div>
                <div className="chat_headerRight">
                  <IconButton>
                    <SearchOutlined />
                  </IconButton>

                  <IconButton>
                    <AttachFile />
                  </IconButton>

                  <IconButton>
                    <MoreVert />
                  </IconButton>
                </div>
              </div>
              <div className="chat_body">
                {allMessage?.map((item) =>
                  (item?.toId === currentUser?.userId &&
                    item?.fromId === own?.id) ||
                  (item?.toId === own?.id &&
                    item?.fromId === currentUser?.userId)
                    ? (console.log(item),
                      (
                        <Message
                          user={
                            item.fromId !== currentUser.userId
                              ? ""
                              : item.fromName
                          }
                          message={item.fromMessage}
                          classs={
                            item.fromId === currentUser.userId
                              ? "left"
                              : "right"
                          }
                        />
                      ))
                    : ""
                )}
              </div>

              <div className="chat_footer">
                <InsertEmoticonIcon />

                <input
                  type="text"
                  placeholder="Type a message..."
                  onBlur={(e) => {
                    setMessage(e.target.value);
                  }}
                />
                <button
                  onClick={() =>
                    prop.get(items.userId, items.userName, message)
                  }
                >
                  Enter
                </button>

                <MicIcon />
              </div>
            </>
          ) : null
        )}
      </div>
    </>
  );
};

export default Chat;
