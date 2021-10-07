import logo from './logo.svg';
import './App.scss';

import NavBar from './NavBar/NavBar';
import Home from './Example/Home';
import ToDoList from './Todos/ToDoList';
import MyFirstComponent from './Example/MyFirstComponent';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <Switch>
            <Route path="/about">
              <MyFirstComponent />
            </Route>

            <Route path="/todolist">
              <ToDoList />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
