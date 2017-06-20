import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Button from './compenents/Button';
import Main from './compenents/Main';
import Sponsors from './compenents/Sponsors';
import Registration from './compenents/Registration';


import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <div className="header-wrap">
              <img src={logo} className="App-logo" alt="logo" />
              <h1>Peoria Hacks</h1>
              <h2>July 29, 2017 - 9am-6pm</h2>
              <div className="button-group">
                <Button href="/">Main</Button>
                <Button href="sponsors" styleName="whitebutton">Sponsors</Button>
                <Button href="registration">Get Registered</Button>
              </div>
            </div>
          </div>

          <Route exact path="/" component={Main}/>
          <Route exact path="/sponsors" component={Sponsors}/>
          <Route exact path="/registration" component={Registration}/>
        </div>
      </Router>
    );
  }
}

export default App;
