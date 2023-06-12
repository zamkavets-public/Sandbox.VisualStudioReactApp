import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import TextareaAutosize from 'react-textarea-autosize';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useSearchParams,
} from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha"

function App() {

    const href = window.location.pathname;
    const sitekey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
    const captchaRef = useRef(null);

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
              <p>{process.env.REACT_APP_TEST_VAR}</p>
              <p>{href}</p>
              <Router>
                  <Routes>
                      <Route
                          path="/"
                          element={<Home />}
                      />
                      <Route
                          path="blog"
                          element={<Post />}
                      />
                      <Route path="*" element={<NotFound />} status={404} />
                  </Routes>
              </Router>

              <ReCAPTCHA
                  sitekey={sitekey}
                  ref={captchaRef}
                  onChange={() => console.log(captchaRef.current.getValue())}
              />

      </header>
    </div>
  );
}

function Home() {

    return (
        <div>
            <p>Home</p>
        </div>
    );
}

function Post() {
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <div>
            <p>{searchParams.get("id")}</p>
        </div>
    );
}

function NotFound() {
    return (
        <div>
            Not Found!
        </div>
    )
}

export default App;
