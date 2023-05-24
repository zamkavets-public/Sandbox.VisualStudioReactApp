import React from 'react';
import logo from './logo.svg';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import TextareaAutosize from 'react-textarea-autosize';

function App() {
    const [questionText, setQuestionText] = React.useState("123");
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
              {uuidv4()}
              <TextareaAutosize
                  style={{ width: "100%", border: "none", outline: "none", resize: "none", backgroundColor: "transparent", overflow: "hidden", fontStyle: "italic", fontSize: "1em", fontFamily: "Arial" }}
                  id="questionText"
                  name="questionText"
                  value={questionText}
                  onChange={(event) => { setQuestionText(event.target.value) } }
                  placeholder="Type the question."
              />
      </header>
    </div>
  );
}

export default App;
