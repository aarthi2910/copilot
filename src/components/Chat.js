import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import FileUpload from './FileUpload';
import './Chat.css';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, type: 'text' }]);
      setInput('');
    }
  };

  const handleFileUpload = (file) => {
    setMessages([...messages, { file, type: 'file' }]);
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
      <FileUpload onFileUpload={handleFileUpload} />
    </div>
  );
}

export default Chat;
