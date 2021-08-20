import React, { useEffect } from 'react';
import logo from './logo.svg';
import connectionManager from './utils/connectionManager';
import './App.css';

function App() {
  useEffect(() => {
    connectionManager.start();
  }, []);

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
        <button onClick={(e) => connectionManager.sendMessage('Sam', 'Hi')}>Click me!</button>
      </header>
    </div>
  );
}

export default App;
