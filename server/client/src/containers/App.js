import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import Login from './Login';

const Home = (props) =>
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>

const Header = (props) =>
  <header className="App-header mb-3">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome to React</h1>
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown button
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <Link class="dropdown-item" to="/">Home</Link>
        <Link class="dropdown-item" to="/login">Login</Link>
        <Link class="dropdown-item" to="/">Something else here</Link>
      </div>
    </div>
  </header>


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
