import logo from './logo.svg';
import './App.css';
import { Flags } from 'react-feature-flags';

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
        <Flags authorizedFlags={['isCanary']}
          renderOn={(authorizedFlags) => <h1>Canary Environment My Fella</h1>}
        />
      </header>
    </div>
  );
}

export default App;
