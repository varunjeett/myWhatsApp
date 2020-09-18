import React, { useState } from "react";
import "./Chatwindow.css";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined, AttachFile, MoreVert } from "@material-ui/icons";
import SendIcon from "@material-ui/icons/Send";
import MicIcon from "@material-ui/icons/Mic";
import MoodIcon from "@material-ui/icons/Mood";
import axios from "./axios.js";

function Chatwindow({ messages }) {
  const [input, setInput] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();

    // sending the message
    await axios.post("/messages/new", {
      message: input,
      name: "Sender Name",
      timestamp: "Just now",
      received: false,
    });

    //to again set input value to empty string
    setInput("");
  };

  return (
    <div className="chatwindow">
      <div className="chatwindowheader">
        {/* header divided into three parts, left photo, middle info and right icons */}

        {/* left photo */}
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuLP-jSS1JAAHNj7g3XhCyWS2MMh_FKdfTZA&usqp=CAU" />

        {/* middle info */}
        <div className="chatwindowheader__info">
          <h4>Abhijeet's Whatsapp</h4>
          <p>Last Seen At {new Date().toUTCString()} </p>
        </div>

        {/* right icon */}
        <div className="chatwindowheader__right">
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

      <div className="chat__body">
        {messages.map((message) => (
          <p
            className={`chat__message  ${
              !message.received && "chat__receiver"
            }`}
          >
            <span className="chat__name">{message.name} </span>
            {message.message}
            <span className="chat__timestamp">{message.timestamp}</span>
          </p>
        ))}
      </div>

      <div className="chat__footer">
        <IconButton>
          <MoodIcon />
        </IconButton>

        <form>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            type="text"
            placeholder="Type your message"
          />

          <button onClick={sendMessage} type="submit"></button>
        </form>

        <IconButton>
          <SendIcon onClick={sendMessage} />
        </IconButton>

        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Chatwindow;
