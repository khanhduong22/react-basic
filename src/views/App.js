import logo from './logo.svg';
import './App.scss';
import MyFirstComponent from './Example/MyFirstComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyFirstComponent />
      </header>
    </div>
  );
}

export default App;
