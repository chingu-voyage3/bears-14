import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
// import logo from './logo.svg';
import '../styles/App.css';

import Login from './Login';
import Social from './Social';

const Home = (props) =>
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>

const Header = (props) =>
  <header className="App-header mb-3">
    <h1 className="App-title">Welcome to React</h1>
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown button
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <Link className="dropdown-item" to="/">Home</Link>
        <Link className="dropdown-item" to="/login">Login</Link>
        <Link className="dropdown-item" to="/social" target="_blank">Social</Link>
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
          <Route path="/social" component={Social} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
