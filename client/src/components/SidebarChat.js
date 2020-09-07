import React from "react";
import { Avatar } from "@material-ui/core";

const SidebarChat = () => {
  return (
    <div className="sidebar-chat">
      <Avatar />
      <div className="sidebar-chat-info">
        <h2>Room name</h2>
        <p>This is the last message on the room</p>
      </div>
    </div>
  );
};

export default SidebarChat;
