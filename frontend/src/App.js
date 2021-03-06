import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar.js";
import Chatwindow from "./Chatwindow.js";
import Pusher from "pusher-js";
import axios from "./axios.js";
import { useStateValue } from "./StateProvider.js";
import Login from "./Login.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [messages, setMessages] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("5cc4966bdf755a32c0f6", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      setMessages([...messages, newMessage]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  return (
    <div className="start">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <div className="app">
            <div className="app_body">
              <Sidebar />
              <Chatwindow messages={messages} />
            </div>
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
