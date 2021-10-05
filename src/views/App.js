import logo from './logo.svg';
import './App.scss';
import MyFirstComponent from './Example/MyFirstComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>config lại prettier 1 tí</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyFirstComponent />
      </header>
    </div>
  );
}

export default App;
