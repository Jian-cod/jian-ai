import React, { useState } from 'react';
import './JianClient.css';

function JianClient() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  
  const send = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', text: input }]);
      setTimeout(() => {
        setMessages(prev => [...prev, { sender: 'jian', text: 'Response: ' + input }]);
      }, 500);
      setInput('');
    }
  };
  
  return (
    <div className="jian">
      <header>
        <h1>简 Jian</h1>
      </header>
      <div className="messages">
        {messages.map((m, i) => (
          <div key={i} className={`msg ${m.sender}`}>
            <div className="bubble">{m.text}</div>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input 
          value={input} 
          onChange={e => setInput(e.target.value)} 
          placeholder="Type..." 
        />
        <button onClick={send}>Send</button>
      </div>
    </div>
  );
}

export default JianClient;
