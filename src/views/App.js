import logo from './logo.svg';
import './App.scss';

import NavBar from './NavBar/NavBar';
import Home from './Example/Home';
import ToDoList from './Todos/ToDoList';
import MyFirstComponent from './Example/MyFirstComponent';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListUser from './User/ListUser';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar />
          <img src={logo} className="App-logo" alt="logo" />
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
            <Route path="/user" exact>
              <ListUser />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
