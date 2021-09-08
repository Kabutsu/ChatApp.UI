import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import connectionManager from './utils/connectionManager';
import './App.css';
import InputText from './components/input-text';

function App() {
  const [userName, setName] = useState<string>(null);

  const connect = () => {
    if (!!userName) {
      connectionManager.start(userName);
    } else {
      alert('Please enter a username to connect');
    }
  }

  const sendMessage = (message: string) => {
    if (!!userName) {
      connectionManager.broadcast(userName, message);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={(e) => connect()}>Connect</button>
        <button onClick={(e) => sendMessage('Hi')}>Click me!</button>
        <InputText id="name" value={userName} onChange={name => setName(name)} />
      </header>
    </div>
  );
}

export default App;
