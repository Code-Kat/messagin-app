import React, {useEffect, useState } from "react";
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from "pusher-js";
import axios from './axios';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync')
    .then(response => {
      console.log(response.data)
    })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('2cf91c452b4b6048213a', {
      cluster: 'ap3'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
    });

    return() => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages]);

console.log(messages);

  return (
    <div className="app">
      <div className="app__body">
        <Chat messages={messages} />
        <Sidebar />
        
      </div>
      
    </div>
  );
}

export default App;
