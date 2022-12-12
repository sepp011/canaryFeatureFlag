import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FlagsProvider } from 'react-feature-flags';


let flags = [
  { name: 'isCanary', isActive: false },
  { name: 'isProd', isActive: true }
]

const currEnv = process.env.REACT_APP_ENV
console.log("currenvi: " + currEnv)
if (currEnv === "canary") {
  flags[0].isActive = true
  flags[1].isActive = false
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FlagsProvider value={flags}>
      <App />
    </FlagsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
