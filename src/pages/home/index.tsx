import { useState } from 'react';

import logo from 'src/images/logo.svg';

import connectionManager from 'src/utils/connectionManager';
import InputText from 'src/components/input-text';

import './home.scss';

const Home = () => {
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
    <div className="p-home">
      <header className="p-home__header">
        <img src={logo} className="p-home__logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="p-home__link"
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

export default Home;
