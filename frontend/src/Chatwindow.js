import React from "react";
import "./Chatwindow.css";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined, AttachFile, MoreVert } from "@material-ui/icons";
import SendIcon from "@material-ui/icons/Send";
import MicIcon from "@material-ui/icons/Mic";
import MoodIcon from "@material-ui/icons/Mood";



function Chatwindow() {
  const sendmessage = () => {};

  return (
    <div className="chatwindow">
      <div className="chatwindowheader">
        {/* header divided into three parts, left photo, middle info and right icons */}

        {/* left photo */}
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuLP-jSS1JAAHNj7g3XhCyWS2MMh_FKdfTZA&usqp=CAU"/>

        {/* middle info */}
        <div className="chatwindowheader__info">
          <h4>Prabjot</h4>
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
        
        <p className="chat__message">
          <span className="chat__name">Abhijeet </span>
          text message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        
        <p className="chat__message">
          <span className="chat__name">Abhijeet </span>
          text message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__message chat__receiver">
          <span className="chat__name">Abhijeet </span>
          text message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Abhijeet </span>
          text message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Abhijeet </span>
          text message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__message chat__receiver">
          <span className="chat__name">Abhijeet </span>
          text message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Abhijeet </span>
          text message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Abhijeet </span>
          text message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__message chat__receiver">
          <span className="chat__name">Abhijeet </span>
          text message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Abhijeet </span>
          text message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Abhijeet </span>
          text message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__message chat__receiver">
          <span className="chat__name">Abhijeet </span>
          text message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Abhijeet </span>
          text message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Abhijeet </span>
          text message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__message chat__receiver">
          <span className="chat__name">Abhijeet </span>
          text message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

      </div>

      <div className="chat__footer">
        <IconButton>
          <MoodIcon />
        </IconButton>

        <form>
          <input type="text" placeholder="Type your message" />
          <IconButton> <SendIcon /> </IconButton>
         
        </form>

        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Chatwindow;
