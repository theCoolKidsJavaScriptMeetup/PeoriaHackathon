import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Navigation from './compenents/Navigation';
import Button from './compenents/Button';
import Main from './compenents/Main';
import Sponsors from './compenents/Sponsors';
import Registration from './compenents/Registration';
import FAQ from './compenents/FAQ';

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
          <Navigation />

          <Route exact path="/" component={Main}/>
          <Route exact path="/sponsors" component={Sponsors}/>
          <Route exact path="/registration" component={Registration}/>
          <Route exact path="/faq" component={FAQ}/>
        </div>
      </Router>
    );
  }
}

export default App;
