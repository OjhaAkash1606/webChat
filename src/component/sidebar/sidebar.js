import React, { useState, useEffect } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { MdDonutLarge } from "react-icons/md";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";

// import SidebarChat from "../sidebarchat/sidebarChat";
// let currentData;
const Sidebar = (prop) => {
  console.log(prop);
  const [dataList, setDataList] = useState();
  const [currentData, setCurrentData] = useState();
  // console.log(userData.id);
  /*
  setDataList(prop.list); */
  // console.log(prop.list);
  // const data = Array.from(prop.list);
  // const userList = useContext(UserContext);
  // console.log(userList)
  // let data = prop.list.flat();
  // console.log(data);

  useEffect(() => {
    const storeList = prop.dataList;
    setCurrentData(prop.currentData);
    setDataList(storeList);
    // selectChat();
  }, [prop]);
  // setDataList(data);
  // console.log(dataList);

  const selectChat = (userName, userId) => {
    console.log(userName, userId);

    prop.selectUserHandler({ userName, userId });
  };
  return (
    <div className="sidebar">
      {/* {console.log(dataList)} */}
      <div className="sidebar_header">
        <Avatar src="" alt="" />
        <h1>{currentData?.name}</h1>
        <div className="sidebar_headerRight">
          <IconButton>
            <BsFillChatLeftTextFill />
          </IconButton>
          <IconButton>
            <MdDonutLarge />
          </IconButton>
          <Link
            to="/"
            onClick={() =>
              prop.removeUser({
                rmUserId: currentData.id,
                rmUserName: currentData.name,
              })
            }
          >
            <IconButton>
              <HiOutlineLogout />
            </IconButton>
          </Link>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar_chats">
        {dataList?.map((item) =>
          item?.userName === null ||
          currentData?.name === item?.userName ? null : (
            // : (console.log(item.userName,currentData.name),
            <div
              className="sidebarChat"
              key={item.userId}
              onClick={() => selectChat(item.userName, item.userId)}
            >
              <Avatar />
              <div className="sidebarChat_info">
                {/* {console.log(item.userName)} */}
                <h2>{item.userName}</h2>
                <p>this is last message</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Sidebar;
