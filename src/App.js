import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Peoria Hacks</h1>
          <div className="button"><a href="#">Sign up now</a></div>
        </div>

        <div className="Content">
          <h2>Welcome!</h2>
        </div>
      </div>
    );
  }
}

export default App;
