import React from "react";
import {
  AttachFile,
  SearchOutlined,
  MoreVert,
  InsertEmoticon,
  Mic,
} from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar />
        <div className="chat-header-info">
          <h3>Room name</h3>
          <p>Last seen at {new Date().toLocaleString()} </p>
        </div>
        <div className="chat-header-right">
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
      <div className="chat-body">
        <p className="chat-content">
          <span className="chat-name">Sonny</span>
          <span className="chat-message">This is a message</span>
          <span className="chat-timestamp">{new Date().toLocaleString()}</span>
        </p>

        <p className="chat-content chat-receiver">
          <span className="chat-name">Jake</span>
          <span className="chat-message">This is a message</span>
          <span className="chat-timestamp">{new Date().toLocaleString()}</span>
        </p>
      </div>
      <div className="chat-footer">
        <InsertEmoticon />
        <form>
          <input type="text" placeholder="Type a message" />
          <button type="submit">Send a message</button>
        </form>
        <Mic />
      </div>
    </div>
  );
};

export default Chat;
