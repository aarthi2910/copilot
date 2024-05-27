import React from 'react';
import './ChatMessage.css';

function ChatMessage({ message }) {
  if (message.type === 'file') {
    return (
      <div className="chat-message">
        <a href={URL.createObjectURL(message.file)} download={message.file.name}>
          {message.file.name}
        </a>
      </div>
    );
  }
  return <div className="chat-message">{message.text}</div>;
}

export default ChatMessage;
