import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import React, { useState } from 'react';
import "./css/Chat.css";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import axios from './axios';

function Chat({ messages }) {

    const [input, setInput]=useState('');

    const sendMessage =async (e) => {
        e.preventDefault();

        await axios.post("/messages/new", {
            message: input,
            name: 'DEMO APP',
            timestamp: "A long time ago (in a galaxy far, far away...",
            received: false,
        });

        setInput("");
    };

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined className="chat__searchOutlined"/>
                    </IconButton>
                    <IconButton> 
                        <AttachFile className="chat__attachFile"/>
                    </IconButton>
                    <IconButton> 
                        <MoreVert className="chat__moreVert"/>
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {messages.map((message) => (
                    <p 
                        className={`chat__message ${message.received && "chat__receiver"}`}
                    > 
                        <span className="chat__name"> {message.name} </span>
                        {message.message}               
                        <span className="chat__timestamp">
                        {message.timestamp}</span>
                    
                    </p>
                ))}
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon className="chat__footerIcons" />
                <form>
                    <input
                        value={input}
                        onChange={(e=> setInput(e.target.value))}
                        placeholder= "Type a message"
                        text="text"
                    />
                    <button 
                    onClick={sendMessage} 
                    type="submit">
                        Click to send 
                    </button>
                </form>
                <MicIcon className="chat__footerIcons chat__footerMicIcon"/>
            </div>
        </div>
    )
}

export default Chat;
