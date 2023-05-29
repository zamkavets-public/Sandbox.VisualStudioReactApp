import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextareaAutosize from 'react-textarea-autosize';

function App() {
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
        <TextareaAutosize />
        <p>{process.env.APPSETTING_REACT_APP_TEST_VAR}</p>
      </header>
    </div>
  );
}

export default App;
