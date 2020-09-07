import React from "react";
import { DonutLarge, Chat, MoreVert, SearchOutlined } from "@material-ui/icons";
import { IconButton, Avatar } from "@material-ui/core";
import profile from "../images/profile.png";
import SidebarChat from "./SidebarChat";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-header-left">
          <Avatar src={profile} />
        </div>
        <div className="sidebar-header-right">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar-search">
        <div className="sidebar-search-container">
          <label htmlFor="search">
            <SearchOutlined />
          </label>
          <input
            type="text"
            placeholder="Search or start new chat"
            id="search"
          />
        </div>
      </div>

      <div className="sidebar-charts">
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;
