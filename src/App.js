import React from 'react';
import logo from './logo.svg';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import SpecialClassForTextareaAutosize from './SpecialClassForTextareaAutosize';

function App() {
    const [questionText, setQuestionText] = React.useState("123");
    const textAreaRef = React.useRef(null);
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
              <SpecialClassForTextareaAutosize tavalue={questionText} handleChange={(event) => setQuestionText(event.target.value)}/>
      </header>
    </div>
  );
}

export default App;
