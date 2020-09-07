import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import axiosInstance from "./axiosInstance";

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/api/v1/messages/sync")
      .then((response) => {
        setMessages(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    //run the pusher function on load and refresh all messages
    const pusher = new Pusher("660a4d2bd5ea7541559c", {
      cluster: "mt1",
    });

    const channel = pusher.subscribe("message");
    channel.bind("inserted", (newMessage) => {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);
  return (
    <div className="app">
      <div className="app-body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default App;
