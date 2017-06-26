import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Button from './compenents/Button';
import Main from './compenents/Main';
import Sponsors from './compenents/Sponsors';
import Registration from './compenents/Registration';

import logo from './logo.png';
import './App.css';

class App extends Component {
  componentWillMount () {
    // console.log(firebase);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <div className="header-wrap">
              <div className="header-content">
                <a href="/">
                  <img src={logo} className="App-logo" alt="logo" />
                </a>

                <h2>July 29, 2017 - 9am-6pm</h2>
                <div className="button-group">
                  <Button href="registration">Get Registered</Button>
                  <Button href="sponsors" styleName="whitebutton">Sponsors</Button>
                </div>
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
